import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function sweaterPage({products}){
    return (
    <Layout>
        <div className="container mx-auto min-h-[50vh]">
            <h1 className="text-[32px] mt-6 mb-12 px-4">Clothes</h1>
            <div className="">
                <ProductsGrid products={products}/>
            </div>
        </div>
    </Layout>
    )
}
export async function getServerSideProps(){
    await mongooseConnect()
    const categoryID = '64a26daf45948d644a8fad52';
    const products = await Product.find({category: categoryID}).exec()
    return {
        props:{
            products: JSON.parse(JSON.stringify(products))
        }
    }
}