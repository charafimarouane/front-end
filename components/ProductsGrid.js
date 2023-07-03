import CardProduct from "./Cardproduct";
import ProductBox from "./ProductBox";

export default function ProductsGrid({products}){
    return(
        <div className="grid grid-cols-4 gap-7 ">
                {products?.length>=1 && products.map((product)=>(
                    <CardProduct key={product._id} {...product}/>
                ))}
        </div>    
    )
}