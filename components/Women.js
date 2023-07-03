import Link from "next/link";
import Gallery from "./Gallery";

export default function Women(){
    return(
        <>
            <h1 className="text-[42px] text-center mb-12 ">Women Collection</h1>
            <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-3">
                    <div className="gallery bg-[url('../IMG/sweaters.jpg')]">
                        <Link id="link" href={'/sweaters'} className="">Cardigans and sweaters</Link>
                    </div>
                    <div className="gallery row-span-3 bg-[url('../IMG/dresses.jpg')]">
                        <Link id="link" href={'/dresses'} className="">Dresses</Link>
                    </div>
                    <div className="gallery bg-[url('../IMG/tshirt.jpg')]">   
                        <Link id="link" href={'/tshirt'} className="">T-shirts</Link>
                    </div>
                    <div className=" gallery bg-[url('../IMG/shoes.jpg')]">
                        <Link id="link" href={'/shoes'} className="">Shoes</Link>
                    </div>
                    <div className="gallery bg-[url('../IMG/bags.jpg')]">
                        <Link id="link" href={'/bags'} className="">Bags</Link>
                    </div>    
                    <div className="gallery bg-[url('../IMG/acessories.jpg')]">   
                        <Link id="link" href={'/accessories'} className="">Accessories</Link>
                    </div>
                    <div className="gallery bg-[url('../IMG/others.jpg')]">
                        <Link id="link" href={'/others'} className="">Others</Link>
                    </div>
            </div>
        </div>
        </>
    )
}