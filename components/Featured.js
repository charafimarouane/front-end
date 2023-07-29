import Image from 'next/image'
import hero from '../public/sans.png'
import Link from 'next/link'

export default function Featured({}){
    return(
        <div className="md:flex md:flex-row flex flex-col-reverse bg-[url('../public/background.png')] bg-cover bg-no-repeat bg-center md:mb-24 mb-8 md:h-[65vh] h-fit">
            <div className='md:w-1/2 w-full flex space-y-6 pt-8 pb-16  flex-col justify-center items-center '>
                <h1 className='md:text-6xl text-4xl text-pink heading'>Style Up</h1>
                <h1 className='md:text-6xl text-4xl font-semibold uppercase text-center text-background'>Summer collection</h1>
                <h1 className='md:text-5xl text-3xl text-slate-100 font-thin uppercase text-center'>Top brands Best offers</h1>
                <Link href={"/"} className='text-2xl font-semibold border-2 text-pink w-fit px-6 pt-2 pb-3 rounded-lg'>Shop now!</Link>
            </div>
            <div className='md:w-1/2 w-full flex justify-center items-center p-6'>
                <Image src={hero} alt="hero" height={400} width={500}/>
            </div>
        </div>
    )

}