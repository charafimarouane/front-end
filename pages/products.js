import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function ProductsPage({products}){
    return(
        <>
            <Header/>
            <Center>
                <h1 className="text-3xl mt-[30px] mb-[20px] "> All products </h1>
                <ProductsGrid products={products}/>
            </Center>
        </>
    )
}

export async function getServerSideProps(){
    await mongooseConnect()
    const products = await Product.find({}, null, {sort:{'category': '64a26e2b45948d644a8fad6a'}})
    return {
        props:{
            products: JSON.parse(JSON.stringify(products))
        }
    }
}