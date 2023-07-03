export default function Gallery(){
    return(
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-3">
                    <div className="gallery bg-[url('../IMG/sweaters.jpg')]">
                        <button className="">Cardigans and sweaters</button>
                    </div>
                    <div className="gallery row-span-3 bg-[url('../IMG/dresses.jpg')]">
                        <button className="">Dresses</button>
                    </div>
                    <div className="gallery bg-[url('../IMG/tshirt.jpg')]">   
                        <button className="">T-shirts</button>
                    </div>
                    <div className=" gallery bg-[url('../IMG/shoes.jpg')]">
                        <button className="">Shoes</button>
                    </div>
                    <div className="gallery bg-[url('../IMG/bags.jpg')]">
                        <button className="">Bags</button>
                    </div>    
                    <div className="gallery bg-[url('../IMG/acessories.jpg')]">   
                        <button className="">Accessoiries</button>
                    </div>
                    <div className="gallery bg-[url('../IMG/others.jpg')]">
                        <button className="">Others</button>
                    </div>
            </div>
        </div>
         
        
    )
}
        // <div class="container mx-auto px-5 py-2 lg:px-32 gallery">
        //     <div class="-m-1 flex flex-wrap md:-m-2">
        //         <div class="flex w-1/2 flex-wrap gap-2">
        //             <div class="w-1/2 p-1 rounded-lg md:p-2 dresses text-center justify-center  ">
        //                 <button className="bg-background px-4 py-2 mt-[150px] rounded-md font-semibold">Dresses</button>
        //             </div>
        //             <div class="w-1/2 p-1 md:p-2 sweaters text-center justify-center rounded-lg ">
        //                 <button className="bg-background px-4 py-2 mt-[150px] rounded-md font-semibold">Cardigans and sweaters</button>
        //             </div>
        //             <div class="w-full p-1 md:p-2">
        //                 <img
        //                 alt="gallery"
        //                 class="block h-full w-full rounded-lg object-cover object-center"
        //                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        //             </div>
        //         </div>
        //         <div class="flex w-1/2 flex-wrap">
        //             <div class="w-full p-1 md:p-2">
        //                 <img
        //                 alt="gallery"
        //                 class="block h-full w-full rounded-lg object-cover object-center"
        //                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        //             </div>
        //             <div class="w-1/2 p-1 md:p-2">
        //                 <img
        //                 alt="gallery"
        //                 class="block h-full w-full rounded-lg object-cover object-center"
        //                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        //             </div>
        //             <div class="w-1/2 p-1 md:p-2">
        //                 <img
        //                 alt="gallery"
        //                 class="block h-full w-full rounded-lg object-cover object-center"
        //                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
        //             </div>
        //         </div>
        //     </div>
        // </div>