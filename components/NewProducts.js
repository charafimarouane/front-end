import ProductBox from "./ProductBox"
import Center from "./Center"

export default function Newproducts({newProducts}){
    
    return(
        <Center>
            <h2 className="text-3xl mt-[30px] mb-[20px]">New arrivals</h2>
        <div className="grid grid-cols-4 gap-7 ">
            {newProducts?.length>1 && newProducts.map((product)=>(
                <ProductBox key={product._id} {...product}/>
            ))}
        </div>
        </Center>
    )
}