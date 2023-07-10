import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function cartPage(){
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext)
   
    const [products, setProducts] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [postalcode, setPostalCode] = useState('')
    const [adress, setAdress] = useState('')
    const [country, setCountry] = useState('')

    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(()=>{
        if (cartProducts.length > 0) {            
            const fetchProductData = async () => {
                const productData = []
                for(const item of cartProducts) {
                    const response = await axios.post('/api/cart', {ids:item.productId})
                    const product = response.data
                    const productWithSelection = {...product, size: item.size, color: item.color, quantity: item.quantity}
                    productData.push(productWithSelection)

                }
                setProducts(productData)
            }
            fetchProductData()
        }else if (products.length === 0){
                clearCart()
        }
    },[cartProducts])

    useEffect(()=>{
        if (typeof window === 'undefined') {
            return ;
        }
        if (window.location.href.includes('success')) {
            setIsSuccess(true)
            clearCart()
        }
    },[])

    function lessOfThisProduct(id,size, color, quantity){
        removeProduct(id, size, color, quantity)
    }

    async function goToPayement(){
        const response = await axios.post('/api/checkout', {
         name,email,city,postalcode,adress,country,cartProducts,})
        if (response.data.url) {
            window.location = response.data.url
        }
    }
    
    let total = 0
    for( const prod of products){
        const quantity = prod.quantity 
        const price = prod[0].price
        total += price * quantity
    }

    if (isSuccess) {
        return(
            <div className="container ">
            <Layout>
                    <div>
                        <h1>Thanks for your order!</h1>
                        <p>We will email you when your order will be sent.</p>
                    </div>
            </Layout>
            </div>
        )
    }

    return(
     <div className="container mx-auto">
        <Layout>
            <div className="flex gap-4 mt-12">
                <div className="bg-white rounded-md w-2/3 p-[30px]">
                <h2>Cart</h2>
                   
                    {!cartProducts?.length && (
                        <div>
                            Your cart is empty
                        </div>
                    )}
                    {cartProducts?.length > 0 && (
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Product</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Size</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Color</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Quantity</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Price</th>
                                    <th className="text-left uppercase text-par font-medium text-[12px]">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((prod, index) => (                                    
                                    <tr key={index}>
                                        <td>{prod[0].title}</td>
                                        <td>{prod.size}</td>
                                        <td>{prod.color}</td>
                                        <td>{prod.quantity}</td>
                                        <td>${prod[0].price * prod.quantity}</td>
                                        <td>
                                            <button onClick={() => lessOfThisProduct(prod[0]._id, prod.size, prod.color, prod.quantity)}>remove</button>
                                        </td>
                                    </tr>
                                ))}     
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
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
                                <Input placeholder="Name" 
                                       type="text"
                                       name="name"
                                       value={name} 
                                       onChange={ev => setName(ev.target.value)}/>
                                <Input placeholder="Email" 
                                       type="text"
                                       name="email"
                                       value={email}
                                       onChange={ev => setEmail(ev.target.value)}/>
                                <div className="flex gap-2">
                                    <Input placeholder="City" 
                                           type="text"
                                           name="city"
                                           value={city} 
                                           onChange={ev => setCity(ev.target.value)}/>
                                    <Input placeholder="Postal Code" 
                                           type="text"
                                           name="postalcode"
                                           value={postalcode} 
                                           onChange={ev => setPostalCode(ev.target.value)}/>
                                </div>
                                <Input placeholder="Street Adress" 
                                       type="text"
                                       name="adress"
                                       value={adress}
                                       onChange={ev => setAdress(ev.target.value)}/>
                                <Input placeholder="Country" 
                                       type="text"
                                       name="country"
                                       value={country} 
                                       onChange={ev => setCountry(ev.target.value)}/>
                                
                                <Button className="block bg-secoundary rounded-md px-2 py-2 font-semibold text-white w-full"
                                    onClick={goToPayement} 
                                >Continue to payement</Button> 
                        </div>
                    
                )}
            </div>
        </Layout>
     </div>
    )
}