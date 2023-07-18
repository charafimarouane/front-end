import Link from "next/link";

export default function Kids(){
    return(
        <div className="my-[150px] ">
            <h1 className="md:text-[42px] text-[32px]  font-medium text-center mb-12">Kids Collection</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
               <div className="gallery bg-[url('../IMG/girls.jpg')]">
                    <Link id="link" href={'/girl'}>Girls</Link>
               </div>
               <div className="gallery bg-[url('../IMG/boys.jpg')] h-[450px] w-[350px]">
                    <Link id="link" href={'/boys'}>Boys</Link>
               </div>
            </div>
        </div>
    )
}