import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Layout from "@/components/Layout";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";

export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext)
    return (
        <div className="container mx-auto">
            <Layout>
                <div className="flex gap-7 mt-10">
                    <div className="bg-white p-[35px] w-1/3   items-center flex justify-center rounded-md">
                        <img className="w-[100%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyrRGl4vtBuEjOi8twdJvNGW_J_j70Lu4Aw&usqp=CAU"/>
                    </div>
                    <div className="w-2/3 px-3 bg-white rounded-md">
                        <h1 className="text-3xl my-[20px] font-semibold">{product.title}</h1>
                        <p className="text-lg">{product.description}</p>
                        <div className="flex">
                            <p className="font-bold text-xl my-auto mx-2">${product.price}</p>
                            <Button onClick={()=> addProduct(product._id)} className='bg-green text-md text-white px-4 my-2 rounded-md py-1 flex gap-2'><CartIcon/> Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export async function getServerSideProps(context){
    await mongooseConnect()
    const {id} = context.query
    const product = await Product.findById(id)
    // console.log({query:context.query});
    return {
        props:{
            product: JSON.parse(JSON.stringify(product)),
        }
    } 
}