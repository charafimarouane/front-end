import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "@/components/Layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function cartPage(){
    const {cartProducts, removeProduct, clearCart} = useContext(CartContext)
   
    const [products, setProducts] = useState([])



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

    async function goToPayment(values) {
        const response = await axios.post('/api/checkout', {
          name: values.name,
          email: values.email,
          city: values.city,
          postalcode: values.postalcode,
          adress: values.adress,
          country: values.country,
          products,
        });
        if (response.data.url) {
          window.location = response.data.url;
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
     <div className="md:container px-4 mx-auto min-h-[50vh]">
            <h2 className="text-4xl font-semibold mt-[50px] "> Shopping bag</h2>
            <div className="md:flex flex-col gap-4 mt-8">
                <div className="bg-white rounded-md md:w-2/3 p-[30px] shadow-md ">
                   
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
                                    <div className="md:w-1/3 ">
                                        <img className="w-[100px] mx-auto" src={prod[0].images[0]}/>
                                    </div>
                                    <div key={index} className="flex flex-col w-2/3 p-3 ">
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
            <div className="bg-white rounded-md mt-2 md:w-1/3 p-[30px] shadow-md max-h-fit">
                <h2 className="font-bold text-lg mb-2">Order informations</h2>
                <Formik
                    initialValues={{
                    name: '',
                    email: '',
                    city: '',
                    postalcode: '',
                    adress: '',
                    country: '',
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Name is required'),
                        email: Yup.string().email('Invalid email address').required('Email is required'),
                        city: Yup.string().required('City is required'),
                        postalcode: Yup.string().required('Postal Code is required'),
                        adress: Yup.string().required('Street Address is required'),
                        country: Yup.string().required('Country is required'),
                      })}
                    onSubmit={goToPayment}
                >
                    <Form>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="py-4 px-2 block w-full rounded-md mt-2 border border-gray-400"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 font-semibold text-sm px-1" />
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="py-4 px-2 block w-full border rounded-md mt-2 border-gray-400"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 font-semibold text-sm px-1" />
                    <div className="flex gap-2 mt-2 w-full">
                        <div className="flex flex-col w-1/2">
                            <Field
                            type="text"
                            name="city"
                            placeholder="City"
                            className="py-4 px-2  border rounded-md border-gray-400"
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500 font-semibold text-sm px-1" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <Field
                            type="text"
                            name="postalcode"
                            placeholder="Postal Code"
                            className="py-4 px-2 border rounded-md  border-gray-400"
                            />
                            <ErrorMessage name="postalcode" component="div" className="text-red-500 font-semibold text-sm px-1" />
                        </div>
                    </div>
                    <Field
                        type="text"
                        name="adress"
                        placeholder="Street Adress"
                        className="py-4 px-2 block w-full border rounded-md mt-2 border-gray-400"
                    />
                    <ErrorMessage name="adress" component="div" className="text-red-500 font-semibold text-sm px-1" />
                    <Field
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="py-4 px-2 block w-full border rounded-md mt-2 border-gray-400"
                    />
                    <ErrorMessage name="country" component="div" className="text-red-500 font-semibold text-sm px-1" />
                    <Button
                        className=" mt-2 block bg-secoundary rounded-md px-2 py-4 font-semibold text-white w-full"
                        type="submit"
                    >
                        Continue to payment
                    </Button>
                    </Form>
                </Formik>
                </div>
            )}
            </div>
        </div>
    </Layout>
    )
}