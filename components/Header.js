import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useRouter } from "next/router";
import logo from '../IMG/bershito.png';
import Image from "next/image";




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
    
    const [showNav, setShowNav] = useState(false)

    return(
        <header className="bg-secoundary md:px-8 pr-2 text-background">
            <div className="relative">
                <div className="flex justify-between py-5">
                    <Link href={'/'} className="text-2xl my-auto">
                        <Image src={logo}  width={200} height={200}/>
                    </Link>
                    <button onClick={()=> setShowNav(!showNav)} className="md:hidden">
                        {showNav ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        }
                    </button>  
                    <form onSubmit={handleSubmit} className="hidden md:flex items-center space-x-2">
                        <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        className="border text-secondary w-[400px] text-black border-gray-400 rounded-md text-lg font-semibold py-1 px-2 focus:outline-none"
                        placeholder="Search"
                        />
                        <button type="submit" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </form>
                    <div className="md:flex items-center space-x-4 hidden">
                        <Link href={'/favoris'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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
                {showNav && 
                <div className="pl-5 md:hidden">
                    <form onSubmit={handleSubmit} className="flex items-center space-x-2 pb-2">
                        <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        className="border text-secondary w-[400px] text-black border-gray-400 rounded-md text-lg font-semibold py-1 px-2 focus:outline-none"
                        placeholder="Search"
                        />
                        <button type="submit" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </form>
                    <div className="items-center ">
                        <Link href={'/favoris'} className="flex py-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <h1 className="text-lg px-2">Favoris</h1>
                        </Link>

                        <Link className="flex pb-4" href={'/cart'}>
                            <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <p className="rounded-md bg-red-500 absolute top-2 right-0 px-1 text-xs">{cartProducts.length}</p>
                            </div>
                            <h1 className="text-lg px-2">Shopping bag</h1>
                        </Link>
                    </div>
                </div>
                }
            </div>
        </header>
    )
}
