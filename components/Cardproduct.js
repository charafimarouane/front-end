import Image from "next/image";
import phone from "../IMG/phone.png"
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function CardProduct({_id,title,description,images,price}){
    const url = "/product/"+_id
    const {addProduct} = useContext(CartContext)
    
    return(
        <div className="w-fit mx-auto">
            <Link href={url}>
                <Image src={phone}/>
            </Link>
            <Link href={url} className="text-[22px] font-semibold my-2 flex justify-center">{title}</Link>
            <div className="flex space-x-3 justify-center ">
                <h2 className="font-semibold text-[22px] text-red-500">${price}</h2>
                <button onClick={()=> addProduct(_id)} className="hover:bg-secoundary hover:text-background text-secoundary border border-secoundary font-semibold rounded-md px-4">
                    Add to cart
                </button>               
            </div>
        </div>
    )
}