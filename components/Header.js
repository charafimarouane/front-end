import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useRouter } from "next/router";



export default function Header(){
    const {cartProducts} = useContext(CartContext)
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm.trim() !== "") {
        router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
      }
    };
    
  

    return(
        <header className="bg-secoundary  px-8 text-background">
            <div className="relative">
                <div className="flex justify-between py-5">
                    <Link href={'/'} className="text-2xl">Bershito</Link>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        className="border text-secondary w-[400px] text-black border-gray-400 rounded-md text-lg font-semibold py-1 px-2 focus:outline-none"
                        placeholder="Search"
                        />
                    </form>
                    <div className="flex items-center space-x-4">
                        <Link href={'/favoris'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </Link>
                        <Link href={'/account'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                        <Link className="relative " href={'/cart'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            {cartProducts.length > 0 && 
                            <h2 className="absolute text-xs bg-red-700 text-white rounded-md px-1 bottom-0 right-0">{cartProducts.length}</h2>
                            }
                        </Link>
                    </div>
                </div>
                {/* <div className="flex space-x-20 justify-center mt-5 font-semibold">
                    <Link href={'/'}>Women</Link>
                    <Link href={'/'}>Men</Link>
                    <Link href={'/'}>Kids</Link>
                </div> */}
            </div>
        </header>
    )
}

{/* <div className="flex justify-between pt-[20px] pr-0">
<Link className="text-white" href={'/'}>Ecommerce</Link>
<div className="flex gap-5">
    <Link className="text-par" href={'/'}>Home</Link>
    <Link className="text-par" href={'/products'}>All products</Link>
    <Link className="text-par" href={'/categories'}>Categories</Link>
    <Link className="text-par" href={'/account'}>Account</Link>
    <Link className="text-par" href={'/cart'}>Cart ({cartProducts.length})</Link>
</div>
</div> */}