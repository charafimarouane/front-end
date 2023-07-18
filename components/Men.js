import Link from "next/link";

export default function Men(){
    return(
        <div className="mt-[150px] ">
            <h1 className="md:text-[42px] text-[32px]  font-medium text-center mb-12 ">Men Collection</h1>
            <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
                <div className="gallery bg-[url('../IMG/clothes.jpg')]">
                    <Link id="link" href={'/mclothes'} className="">Clothes</Link>
                </div>
                <div className="gallery lg:row-span-2 bg-[url('../IMG/menbags.jpg')] ">
                    <Link id="link" href={'/mbags'} className="">Bags</Link>
                </div>
                <div className="gallery bg-[url('../IMG/menunderclothes.jpg')] ">   
                    <Link id="link" href={'/munderwear'} className="">Underwear</Link>
                </div>
                <div className=" gallery bg-[url('../IMG/messhoes.jpg')]">
                    <Link id="link" href={'/mshoes'} className="">Shoes</Link>
                </div>
                <div className="gallery bg-[url('../IMG/menothers.jpg')]">
                    <Link id="link" href={'/mother'} className="">Other</Link>
                </div>    
            </div>
        </div>
        </div>
    )
}