import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function sweaterPage({products}){
    return (
        <div className="container mx-auto">
            <Layout>
            <h1 className="text-[32px] mt-6 mb-12">Bags</h1>
            <div className="">
                <ProductsGrid products={products}/>
            </div>
            </Layout>
        </div>
    )
}
export async function getServerSideProps(){
    await mongooseConnect()
    const categoryID = '64a26e6c45948d644a8fad76';
    const products = await Product.find({category: categoryID}).exec()
    return {
        props:{
            products: JSON.parse(JSON.stringify(products))
        }
    }
}