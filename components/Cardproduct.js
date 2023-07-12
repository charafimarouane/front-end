import Link from "next/link";
import { FavContext } from "./FavContext";
import { useContext} from "react";


export default function CardProduct({_id,title,description,images,price}){
    const url = "/product/"+_id
    const {addToFavoris} = useContext(FavContext)

    return(
        <div className="w-fit mx-auto ">
            <div>
                <Link href={url}>
                    <img src={images?.[0]} className="h-[450px]"/>
                </Link>
                <div className="flex">
                    <Link 
                    href={url}
                    className="w-2/3">
                        <h1 className="text-[20px] font-sans font-semibold mt-2">{title}</h1>
                        <h2 className="font-semibold text-[20px] font-sans ">${price}</h2>
                    </Link>
                    <div 
                        className="flex items-center justify-end w-1/3"
                        onClick={() => addToFavoris(_id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>         
            </div>
        </div>
    )
}