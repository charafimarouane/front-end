import Image from "next/image";
import phone from "../IMG/phone.png"
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CardProduct({_id,title,description,images,price}){
    const url = "/sweater/"+_id
    const {addProduct} = useContext(CartContext)

    return(
        <div className="w-fit mx-auto">
            <div>
                <Image src={phone}/>
            </div>
            <h3 className="text-[22px] font-semibold my-2 text-center">{title}</h3>
            <div className="flex space-x-3 justify-center ">
                <h2 className="font-semibold text-[22px] text-red-500">${price}</h2>
                <button onClick={addProduct} className="hover:bg-secoundary hover:text-background text-secoundary border border-secoundary font-semibold rounded-md px-4">
                    Add to cart
                </button>               
            </div>
        </div>
    )
}