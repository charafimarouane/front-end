import Image from 'next/image'
import offer from '../IMG/offer.png'

export default function Offer(){
    return(
        <div className="grid grid-cols-3 my-12">
            <div className="">
                <Image src={offer}/>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <h1 className='text-7xl mb-6 font-semibold'>Do you like discounts?</h1>
                <p className='text-2xl font-semibold max-w-[500px] text-left'>Subscribe to the newsletter and get 50$ for the first order from 300$</p>
                <div className='flex my-4'>
                    <input className='border border-gray-500 rounded-md px-4 py-2 min-w-[400px]'/>
                    <button className='text-xl font-semibold px-4 py-2 mx-5'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}