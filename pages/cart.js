import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function cartPage(){
    const {cartProducts} = useContext(CartContext)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts}).then(
                respons => {setProducts(respons.data)}
            )
        }
    },[cartProducts])
    return(
     <>
        <Header/>
        <Center>
            <div className="flex gap-4 mt-12">
                <div className="bg-white rounded-md w-2/3 p-[30px]">
                <h2>Cart</h2>

                    {!cartProducts?.length && (
                        <div>
                            Your cart is empty
                        </div>
                    )}
                    {products?.length > 0 && (
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Product</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Quantity</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                <tr key={product._id}>
                                    <td className="pt-4">
                                        <div className="w-[100px] h-[100px] p-[10px] border border-gray-300 rounded-md flex justify-center items-center">
                                            <img className="max-w-[80px] max-h-[80px]" src={product.images[0]}/>
                                        </div>
                                        {product.title}
                                    </td>
                                    <td>{cartProducts.filter(id => id === product._id).length}</td>
                                    <td>${cartProducts.filter(id => id === product._id).length * product.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
                {!!cartProducts?.length && (
                    <div className="bg-white rounded-md w-1/3 p-[30px]">
                    <h2>Order informations</h2>
                    <input placeholder="Adress 1"/>
                    <input placeholder="Adress 2"/>
                    <Button className="block bg-green rounded-md px-2 py-1 text-white w-full">Continue to payement</Button>
                </div>
                )}
            </div>
        </Center>
     </>
    )
}