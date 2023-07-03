import Gallery from "./Gallery";

export default function Men(){
    return(
        <div className="mt-[150px]">
            <h1 className="text-[42px] text-center mb-12 ">Men Collection</h1>
            <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-3">
                <div className="gallery bg-[url('../IMG/clothes.jpg')]">
                    <button className="">Clothes</button>
                </div>
                <div className="gallery row-span-2 bg-[url('../IMG/menbags.jpg')] ">
                    <button className="">Bags</button>
                </div>
                <div className="gallery bg-[url('../IMG/menunderclothes.jpg')] ">   
                    <button className="">Underwear</button>
                </div>
                <div className=" gallery bg-[url('../IMG/messhoes.jpg')]">
                    <button className="">Shoes</button>
                </div>
                <div className="gallery bg-[url('../IMG/menothers.jpg')]">
                    <button className="">Other</button>
                </div>    
            </div>
        </div>
        </div>
    )
}