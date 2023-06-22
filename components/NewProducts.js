import Center from "./Center"
import ProductsGrid from "./ProductsGrid"

export default function Newproducts({newProducts}){
    
    return(
        <Center>
            <h2 className="text-3xl mt-[30px] mb-[20px]">New arrivals</h2>
            <ProductsGrid products={newProducts}/>
        </Center>
    )
}