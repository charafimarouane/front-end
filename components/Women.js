import Link from "next/link";

export default function Women(){
    return(
        <div className="md:mb-24 mb-8">
            <h1 className="md:text-[42px] text-[32px] font-medium text-center mb-12 ">Women Collection</h1>
            <div className="container mx-auto px-2">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
                    <div className="gallery bg-women-sweaters">
                        <Link id="link" href={'/wsweaters'} className="">Cardigans and sweaters</Link>
                    </div>
                    <div className="gallery lg:row-span-3 bg-[url('../IMG/dresses.jpg')]">
                        <Link id="link" href={'/wdresses'} className="">Dresses</Link>
                    </div>
                    <div className="gallery bg-[url('../IMG/tshirt.jpg')]">   
                        <Link id="link" href={'/wtshirt'} className="">T-shirts</Link>
                    </div>
                    <div className=" gallery bg-[url('../IMG/shoes.jpg')]">
                        <Link id="link" href={'/wshoes'} className="">Shoes</Link>
                    </div>
                    <div className="gallery bg-[url('../IMG/bags.jpg')]">
                        <Link id="link" href={'/wbags'} className="">Bags</Link>
                    </div>    
                    <div className="gallery bg-[url('../IMG/acessories.jpeg')]">   
                        <Link id="link" href={'/waccessories'} className="">Accessories</Link>
                    </div>
                    <div className="gallery bg-[url('../IMG/others.jpg')]">
                        <Link id="link" href={'/wothers'} className="">Others</Link>
                    </div>
            </div>
        </div>
        </div>
    )
}