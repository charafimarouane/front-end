export default function Kids(){
    return(
        <div className="my-[150px]">
            <h1 className="text-[42px] text-center mb-12 ">Kids Collection</h1>
            <div className="grid grid-cols-2 gap-20">
               <div className="gallery bg-[url('../IMG/dresses.jpg')] h-[350px] w-[350px]">
                    <button>Boys</button>
               </div>
               <div className="gallery bg-[url('../IMG/dresses.jpg')]">
                    <button>Girls</button>
               </div>
            </div>
        </div>
    )
}