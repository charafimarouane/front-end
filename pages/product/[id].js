import { CartContext } from "@/components/CartContext";
import Layout from "@/components/Layout";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

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
            // You can access the selected values from the `values` object
            addProduct(
              product._id,
              values.selectedOption,
              values.selectedColor,
              values.selectedValue
            );
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
                    <h1 className="text-3xl  ">${product.price}</h1>
                  </div>
                  <p className="text-lg px-2 my-6">{product.description}</p>
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
    </Layout>
  );
}

// export default function ProductPage({product}){
    
//     const {addProduct} = useContext(CartContext)
//     const [selectedOption, setSelectedOption] = useState('S')
//     const [selectedColor, setSelectedColor] = useState('WHITE')
//     const [selectedValue, setSelectedValue] = useState(1)
//     function handleSelectSize(event){
//         setSelectedOption(event.target.value)
//     }
//     function handleSelectColor(event){
//         setSelectedColor(event.target.value)
//     }
//     function handleValue(event){
//         setSelectedValue(event.target.value)
//     }
    
//     return (
//         <Layout>
//         <div className="container mx-auto">
//                 <div className="flex gap-7 mt-10 ">
//                     <div className="bg-white p-[35px] w-2/3   items-center flex justify-center rounded-md shadow-md">
//                         <ProductImages images={product.images}/>
//                     </div>
//                     <div className="w-1/3 p-3 bg-white rounded-md shadow-md">
//                         <div className="flex flex-col space-y-2 my-8">
//                             <h1 className="text-3xl font-semibold capitalize ">{product.title}</h1>
//                             <h1 className="text-3xl  ">${product.price}</h1>
//                         </div>
//                         <p className="text-lg px-2 my-6">{product.description}</p>
//                         <div className=" space-y-2 my-4">
//                             {product.properties?.size.length > 1  && (
//                                         <select
//                                             value={selectedOption} 
//                                             onChange={handleSelectSize}
//                                             multiple={false}
//                                             className="py-4 px-2 space-y-2 block w-full border border-gray-400 "
//                                         >
//                                         {  product.properties.size.map(p => (
//                                             <option id="option" className="" key={p} value={p}>{p}</option> 
//                                         ))}
//                                         </select>
//                             )}
//                         {product.properties?.color?.length > 0 && (                           
//                             <select 
//                             value={selectedColor}
//                                 onChange={handleSelectColor}
//                                 multiple={false}
//                                 className="py-4 px-2 block w-full border border-gray-400"
//                             >{product.properties?.color?.map(c => (
//                                 <option key={c} value={c}>{c}</option>
//                             ))}</select>
//                         )}
//                         <input type="number" min={0} max={20} value={selectedValue} onChange={handleValue} className="py-4 px-2 block w-full border border-gray-400"/>
//                         </div>
//                         <div className="block ">
//                             <button onClick={()=> addProduct(product._id, selectedOption, selectedColor, selectedValue)} className=' flex justify-center gap-5 bg-secoundary rounded-md px-2 py-4 font-semibold text-white text-xl w-full '><CartIcon/> Add to bag</button>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//         </Layout>
//     )
// }

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