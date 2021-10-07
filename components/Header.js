import Image from "next/image"
import logo from "../assests/logosmallblackv2.png"
import {CameraIcon,CalendarIcon} from "@heroicons/react/solid"

function header() {
    return (
        <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-xl p-2 md:px-10">
            {/* left */}
            <div className=" relative flex items-center h-10 my-auto ">
            {/* <div className = "relative flex "> */}
            <Image src = {logo}
                layout = 'fill'
                objectPosition = 'left'
                objectFit = 'contain'
            />

            </div>

            {/* middle */}
            <div className=" flex justify-center uppercase space-x-10 items-center ">
                <p className="hidden md:block font-semibold cursor-pointer transition duration-250 ease-out hover:text-red-600 ">Home</p>
                <p className="hidden md:block font-semibold cursor-pointer transition duration-250 ease-out hover:text-red-600">Service</p>
                <p className="hidden md:block font-semibold cursor-pointer transition duration-250 ease-out hover:text-red-600">Contact Us</p>
                {/* <div className=' flex space-x-4 items-center cursor-pointer border-2 rounded-full p-1 font-semibold'>
                    <a href="https://www.instagram.com/miyagi.my/" className='hidden md:block '>Instagram</a>
                    <CameraIcon className="h-8 bg-red-600 items-center text-black rounded-full "/>
                </div> */}
                <div className=' flex space-x-2 items-center cursor-pointer font-semibold transition duration-250 ease-out hover:text-red-600'>
                    <a href="https://www.instagram.com/miyagi.my/" className='hidden md:block '>Instagram</a>
                    <CameraIcon className="h-8 text-red-600 items-center   "/>
                </div>
                

            </div>

            {/* Right */}
            <div className=" flex items-center space-x-4 justify-end">
                <div className='space-x-4 flex rounded-full items-center border p-1.5 cursor-pointer uppercase font-semibold transition duration-150 ease-out hover:border-red-600 hover:text-red-600 active:scale-90'>
                    <a href="https://www.instagram.com/miyagi.my/" className='hidden md:block '>Book an Appointment</a>
                    <CalendarIcon className="h-8 items-cente bg-black text-red-600 p-1 rounded-full"/>
                </div>
                
            </div>
        </header>
    )
}

export default header
