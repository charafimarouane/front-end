import Image from "next/image";
import hero from "../IMG/hero.png"
import Link from "next/link";
export default function Featured({}){
    return(
        <div className="md:flex md:flex-row flex flex-col-reverse mb-8">
            <div className="md:w-1/2 md:my-auto mx-auto mt-8">
                
                <h1 className="md:text-7xl text-5xl mb-4">Summer outfits</h1>
                <Link href={"/"} className="">
                    <h1 className="md:text-3xl text-xl hover:md:bg-secoundary rounded-md md:border-2 md:border-secoundary bg-secoundary md:bg-white md:text-secoundary text-white md:ml-0 mx-auto hover:md:text-white py-2 px-3 w-fit md:mt-5">Available now!</h1>
                </Link>
            </div>
            <div  className="md:w-1/2 mx-auto px-8">
                <Image src={hero} width={500} height={500}/>
            </div>

        </div>
    )

}