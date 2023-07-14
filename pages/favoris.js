import { FavContext } from "@/components/FavContext";
import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Favoris() {
  const { favProducts } = useContext(FavContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (favProducts.length > 0) {
      axios
        .post("/api/cart", { ids: favProducts })
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      setProduct([]);
    }
  }, [favProducts]);

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold mt-[50px] mb-8 ">favoris</h1>
            {!favProducts?.length && (
            <div className="bg-white rounded-md w-2/3 p-[30px] shadow-md ">
                <div className="py-6">
                    <h1 className="text-2xl font-semibold">Your favoris is empty!</h1>
                    <p className="text-[14px] mt-2">Sign in to save or access saved items in your favoris.</p>
                </div>
            </div>
            )}
            {favProducts?.length > 0 && (
            <div className="">
                <ProductsGrid products={product} />
            </div>
            )}
      </div>
    </Layout>
  );
}


// import {FavContext}  from "@/components/FavContext";
// import Layout from "@/components/Layout";
// import ProductsGrid from "@/components/ProductsGrid";
// import axios from "axios";
// import { useContext, useEffect, useState } from "react";

// export default function Favoris(){
//     const {favProducts , setFavProducts} = useContext(FavContext)
//     const [product, setProduct] = useState([])
//     useEffect(()=>{
//         if (favProducts.length > 0) {
//             axios.post('/api/cart', {ids:favProducts}).then(
//                 response => {setProduct(response.data)}
//             )
//         }else{
//             setFavProducts([])
//         }
//     },[favProducts])
    
//     return(
//         <Layout>
//             <div className="container mx-auto">
//                 <h1 className="text-[32px] mt-6 mb-12">favoris</h1>
//                 <div className="">
//                     <ProductsGrid products={product}/>
//                 </div>
//             </div>
//         </Layout>
//     )
// }