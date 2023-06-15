import { styled } from "styled-components"
import ProductBox from "./ProductBox"
import Center from "./Center"

const ProductGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap : 20px;
        padding-top:30px;
    `
export default function Newproducts({newProducts}){
    
    return(
        <Center>
        <ProductGrid>
            {newProducts?.length>1 && newProducts.map((product)=>(
                <ProductBox {...product}/>
            ))}
        </ProductGrid>
        </Center>
    )
}