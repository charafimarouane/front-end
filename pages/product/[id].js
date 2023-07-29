import { CartContext } from "@/components/CartContext";
import Layout from "@/components/Layout";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from "next/link";
import axios from "axios";


export default function ProductPage({ product }) {
  const [showModal, setShowModal] = useState(false)
  const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext)
  const [products, setProducts] = useState([])

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
    
    const toggleModal = () => {
      setShowModal(!showModal)
    }
    function lessOfThisProduct(id,size, color, quantity){
      removeProduct(id, size, color, quantity)
    }
    
  return (
    <Layout>
      <div className="md:container mx-auto px-4">
        <Formik
          initialValues={{
            selectedOption: product.properties?.size[0],
            selectedColor: product.properties?.color[0],
            selectedValue: 1
          }}
          validate={values => {
            const errors = {};

            // Add your validation logic here
            // For example, check if the selected option is valid

            if (
              product.properties?.size.length < 1
            ) {
              errors.selectedOption = 'Invalid size option';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // Handle the form submission here
            addProduct(
              product._id,
              values.selectedOption,
              values.selectedColor,
              values.selectedValue
            );
            toggleModal()
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="md:flex md:gap-7 mt-10 ">
                <div className="bg-white p-[35px] md:w-2/3 items-center flex justify-center rounded-md shadow-md">
                  <ProductImages images={product.images} />
                </div>
                <div className="md:w-1/3 p-3 bg-white rounded-md shadow-md">
                  <div className="flex flex-col space-y-2 my-8">
                    <h1 className="text-3xl font-semibold capitalize ">
                      {product.title}
                    </h1>
                    {/* {product.discount? <h1 className="text-3xl text-red-500">${product.discount} <span className="line text-secoundary/60">${product.price}</span></h1> : <h1 className="text-3xl">${product.price}</h1>} */}
                    <h1 className="text-3xl">${product.price}</h1>
                  </div>
                  <p className="text-lg px-2 my-6">{product.description}</p>
                  <p className="text-lg px-2 my-2">Item location: <span className="font-semibold">{product.itemLocation}</span></p>
                  <div className=" space-y-2 my-4">
                    {product.properties?.size?.length > 1 && (
                      <Field
                        as="select"
                        name="selectedOption"
                        className="py-4 px-2 space-y-2 block w-full border border-gray-400"
                      >
                        {product.properties.size.map(p => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </Field>
                    )}
                    <ErrorMessage
                      name="selectedOption"
                      component="div"
                      className="text-red-500"
                    />

                    {product.properties?.color?.length > 0 && (
                      <Field
                        as="select"
                        name="selectedColor"
                        className="py-4 px-2 block w-full border border-gray-400"
                      >
                        {product.properties.color.map(c => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </Field>
                    )}
                    <ErrorMessage
                      name="selectedColor"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      type="number"
                      name="selectedValue"
                      min={1}
                      max={20}
                      className="py-4 px-2 block w-full border border-gray-400"
                    />
                    <ErrorMessage
                      name="selectedValue"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="block ">
                    <button
                      type="submit"
                      className="flex justify-center gap-5 bg-secoundary rounded-md px-2 py-4 font-semibold text-white text-xl w-full"
                 
                    >
                      <CartIcon /> Add to bag
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md md:min-w-[700px] mx-auto max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Bag Items</h2>
            {!cartProducts?.length && (
                        <div className=" py-6">
                            <h1 className="text-2xl font-semibold">Your shopping bag is empty!</h1>
                            <p className="text-[14px] mt-2">Choose products in your shopping bag.</p>
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
                            
                        </div>
                    )}
            <div className="mt-4">
              <Link href="/cart" className="underline">
                Go to Bag Page
              </Link>
            </div>
            <button
              className="mt-4 px-3 py-2 font-semibold bg-red-500 text-white rounded-md"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context){
    await mongooseConnect()
    const {id} = context.query
    const product = await Product.findById(id)

    return {
        props:{
            product: JSON.parse(JSON.stringify(product)),
        }
    } 
}