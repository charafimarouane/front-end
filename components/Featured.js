import Image from "next/image";

export default function Featured({}){
    return(
        <>
            <div >
                <h1>Discover now</h1>
                <h1>summer outfits</h1>
            </div>
            <div >
                <Image src={"/IMG/clothes.jpg"} width={100} height={100}/>
            </div>

        </>
    )

}