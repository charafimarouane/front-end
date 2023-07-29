import CardProduct from "./Cardproduct";

export default function ProductsGrid({products}){
    return(
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-7 ">
                {products?.length>0 && products.map((product)=>(
                    <CardProduct key={product._id} {...product}/>
                ))}
        </div>    
    )
}