import { useState } from "react"

export default function({images}){
    const [activeImage, setActiveImage] = useState(images?.[0])
    return(
        <>
            <div className="flex flex-col gap-2">
                <img 
                    className="w-[600px] max-h-[700px]"
                    src={activeImage}
                />
                <div className="flex  gap-2 flex-grow-0 ">
                    {images.map(image => (
                    <div 
                        className="border h-[150px] w-[150px] cursor-pointer rounded-md"
                        key={image}
                        active={image===activeImage}
                        onClick={()=>setActiveImage(image)}    
                    >
                        <img className="w-full h-full" src={image} alt=''/>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}