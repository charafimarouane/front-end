import CardProduct from "./Cardproduct";
import { headerStyle } from "@/lib/styles";
export default function Bestsellers(){
     
    return(
        <>
            <h1 className="text-[42px] text-center mb-12">Best Sellers</h1>
            <div className="grid grid-cols-4 gap-7 mb-[150px] container ">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </>
    )
}