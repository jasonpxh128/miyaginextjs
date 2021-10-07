import Image from "next/image"
import {ChevronRightIcon} from "@heroicons/react/solid"


function Midcontent({text, image}) {
    return (
        <div className='flex flex-col items-center mt-5 cursor-pointer hover:bg-red-100 hover:scale-105 transition transform duration-200 ease-out'>
            {/* Top */}
            <h2 className='font-semibold text-4xl left w-[200px] justify-items-end mr-32 text-red-900'>{text}</h2>
            
            {/* Bottom */}
            <div className='relative h-[300px] w-[320px]'>
                <Image src = {image} layout='fill' />
                <ChevronRightIcon className=' absolute h-20 w-20 bottom-1 right-0 p-0 text-red-600'/>
            </div>
           
           
            
        </div>
    )
}

export default Midcontent
