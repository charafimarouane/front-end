import Center from "./Center";
import Button from "./Button";
import Image from "next/image";
import phone from "../IMG/phone.png"
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";


export default function Featured({product}){
    const {addProduct} = useContext(CartContext)
    function addFeaturedToCart(){
        addProduct(product._id)
    }
    return(
    
            <div className="bg-background text-white py-[50px]">

            
            <Center>
    
                <div className="grid grid-cols-2 gap-[40px]">
                    
                        <div className="flex flex-col items-start">
                            <h1 className="mb-4 text-[48px]">{product.title}</h1>
                            <p className="text-par text-sm ">{product.description}</p>
                            <div className="flex gap-1 mt-[25px]">
                                <Link
                                    className="bg-transparent border border-white px-4 rounded-md py-2"
                                    href ={'/product/'+product._id}
                                >Read more
                                </Link>
                                <Button className="bg-white text-btnColor flex px-4 py-2 gap-2 rounded-md" onClick={addFeaturedToCart}>
                                    <CartIcon/>
                                    Add to cart
                                </Button>
                            </div>    
                        </div>
                    
                    <div className="mx-auto">
                        <Image src={phone} alt=""/>
                    </div>
                    </div>
    
            </Center>
            </div>
    
    )

}