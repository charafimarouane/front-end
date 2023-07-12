import {FavContext}  from "@/components/FavContext";
import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Favoris(){
    const {favProducts , setFavProducts} = useContext(FavContext)
    const [product, setProduct] = useState([])
    useEffect(()=>{
        if (favProducts?.length > 0) {
            axios.post('/api/cart', {ids:favProducts}).then(
                response => {setProduct(response.data)}
            )
        }else{
            setFavProducts([])
        }
    },[favProducts])
    
    return(
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-[32px] mt-6 mb-12">favoris</h1>
                <div className="">
                    <ProductsGrid products={product}/>
                </div>
            </div>
        </Layout>
    )
}