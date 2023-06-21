import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";

export default function cartPage(){
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts}).then(
                respons => {setProducts(respons.data)}
            )
        }else{
            setProducts([])
        }
    },[cartProducts])

    function moreOfThisProduct(id){
        addProduct(id)
    }

    function lessOfThisProduct(id){
        removeProduct(id)
    }
    let total = 0
    for( const productId of cartProducts){
        const price = products.find(p => p._id === productId)?.price || 0
        total += price
    }

    
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            city:'',
            postalcode:'',
            country:'',
            adress:'',
            products:'',
            
        }
    })
    // console.log(formik.values);

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
                                    <td className="">
                                        <div className="flex justify-start gap-2">
                                            <Button onClick={() => lessOfThisProduct(product._id)} className="px-2 border border-gray-500 rounded-sm">-</Button>
                                            <span className="text-center">
                                            {cartProducts.filter(id => id === product._id).length}
                                            </span>
                                            <Button onClick={() => moreOfThisProduct(product._id)} className="px-2 border border-gray-500 rounded-sm">+</Button>
                                        </div>
                                    </td>
                                    <td>${cartProducts.filter(id => id === product._id).length * product.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>${total}</td>
                            </tr>
                            </tbody>
                        </table>
                    )}
                </div>
                {!!cartProducts?.length && (
                        <div className="bg-white rounded-md w-1/3 p-[30px]">
                            <h2 className="font-bold text-lg mb-2">Order informations</h2>
                            <form method="post" action="/api/checkout">
                                <Input placeholder="Name" 
                                       type="text"
                                       name="name"
                                       value={formik.values.name} 
                                       onChange={formik.handleChange}/>
                                <Input placeholder="Email" 
                                       type="text"
                                       name="email"
                                       value={formik.values.email}
                                       onChange={formik.handleChange}/>
                                <div className="flex gap-2">
                                    <Input placeholder="City" 
                                           type="text"
                                           name="city"
                                           value={formik.values.city} 
                                           onChange={formik.handleChange}/>
                                    <Input placeholder="Postal Code" 
                                           type="text"
                                           name="postalCode"
                                           value={formik.values.postalcode} 
                                           onChange={formik.handleChange}/>
                                </div>
                                <Input placeholder="Street Adress" 
                                       type="text"
                                       name="adress"
                                       value={formik.values.adress}
                                       onChange={formik.handleChange}/>
                                <Input placeholder="Country" 
                                       type="text"
                                       name="country"
                                       value={formik.values.country} 
                                       onChange={formik.handleChange}/>
                                <Input hidden 
                                       name="products"
                                       value={cartProducts.join(',')}
                                       />
                                <Button className="block bg-green rounded-md px-2 py-1 text-white w-full"
                                    type="submit"
                                >Continue to payement</Button>
                            </form>
                        </div>
                    
                )}
            </div>
        </Center>
     </>
    )
}