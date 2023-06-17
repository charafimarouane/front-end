import { useContext } from "react"
import Button from "./Button"
import Link from "next/link"
import { CartContext } from "./CartContext"

    export default function ProductBox({_id,title,description,images,price}){
        const url = "/product/"+_id
        const {addProduct} = useContext(CartContext)
        return(
            <div >
                <Link className="bg-white p-[15px] h-[140px] items-center flex justify-center rounded-md" href={url}>
                    <div>
                        <img className="max-w-full max-h-[80px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyrRGl4vtBuEjOi8twdJvNGW_J_j70Lu4Aw&usqp=CAU"/>
                        {/* <img src={images[0]} alt=""/> */}
                    </div>
                </Link>
                <div className="mt-1">
                    <Link className="text-inherit text-sm" href={url}>{title}</Link>
                    <div className="flex items-center justify-between mt-[2px]">
                        <h1 className="text-xl font-semibold">${price}</h1>
                        <Button
                            onClick={() => addProduct(_id)}
                            className="bg-transparent border-2 border-green text-green text-xs px-2 rounded-md py-1">Add to cart</Button>
                    </div>
                </div>
            </div>
        
    )
}