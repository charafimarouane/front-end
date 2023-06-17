import Link from "next/link";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";



export default function Header(){
    const {cartProducts} = useContext(CartContext)
    return(
        <header className="bg-background pb-4">
            <Center>
                <div className="flex justify-between pt-[20px] pr-0">
                    <Link className="text-white" href={'/'}>Ecommerce</Link>
                    <div className="flex gap-5">
                        <Link className="text-par" href={'/'}>Home</Link>
                        <Link className="text-par" href={'/products'}>All products</Link>
                        <Link className="text-par" href={'/categories'}>Categories</Link>
                        <Link className="text-par" href={'/account'}>Account</Link>
                        <Link className="text-par" href={'/cart'}>Cart ({cartProducts.length})</Link>
                    </div>
                </div>
            </Center>
        </header>
    )
}