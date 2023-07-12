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
    console.log(products);
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
         name,email,city,postalcode,adress,country,products})
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
            <Layout>
            <div className="container ">
                    <div>
                        <h1>Thanks for your order!</h1>
                        <p>We will email you when your order will be sent.</p>
                    </div>
            </div>
            </Layout>
        )
    }

    return(
    <Layout>
     <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mt-[70px] text-center"> Shopping bag</h2>
            <div className="flex gap-4 mt-8">
                <div className="bg-white rounded-md w-2/3 p-[30px] shadow-md ">
                   
                    {!cartProducts?.length && (
                        <div className=" py-6">
                            <h1 className="text-2xl font-semibold">Your shopping bag is empty!</h1>
                            <p className="text-[14px] mt-2">Sign in to save or access saved items in your shopping bag.</p>
                        </div>
                    )}
                    {cartProducts?.length > 0 && (
                        <div className="w-full">
                                {products.map((prod, index) => (
                                <div className="flex my-3 ">
                                    <div className="w-1/3">
                                        <img className="w-[200px] mx-auto" src={prod[0].images[0]}/>
                                    </div>
                                    <div key={index} className="flex flex-col w-2/3 p-3">
                                        <div className="flex justify-between ">
                                            <div>
                                                <h2 className="text-lg font-semibold">{prod[0].title}</h2>
                                                <h2 className="text-lg font-semibold text-red-500">${prod[0].price * prod.quantity}</h2>
                                            </div>
                                            <div className="text-sm">
                                                <button 
                                                    className=" text-secoundary hover:text-red-500"
                                                    onClick={() => lessOfThisProduct(prod[0]._id, prod.size, prod.color, prod.quantity)}
                                                    >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between my-12">
                                            <h2 className="text-sm font-semibold text-gray-500">Color: {prod.color}</h2>
                                            <h2 className="text-sm font-semibold text-gray-500">Size: {prod.size}</h2>
                                            <h2 className="text-sm font-semibold text-gray-500">Quantity: {prod.quantity}</h2>
                                        </div>
                                        
                                    </div>
                                </div>                                    
                                ))}     
                                <div className="font-semibold flex justify-end px-2">
                                    <h2>Total: ${total}</h2>
                                </div>
                            
                        </div>
                    )}
                </div>
                {!!cartProducts?.length && (
                        <div className="bg-white rounded-md w-1/3 p-[30px] shadow-md">
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
     </div>
    </Layout>
    )
}