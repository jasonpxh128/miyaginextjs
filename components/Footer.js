import {CameraIcon} from "@heroicons/react/solid"

function Footer() {
    return (

            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-black text-gray-400'>
                <div className='space-y-4 text-sx text-white'>
                    <h5 className='font-bold text-red-600'>Explore</h5>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Contact Us</p>
                    <p>Our Work</p>

                </div>
                <div className='space-y-4 text-sx text-white'>
                    <h5 className='font-bold text-red-600'>Visit</h5>
                    <p>Golf GT Auto Club</p>
                    <p>Jalan Kelikir, </p>
                    <p>Mines Wellness City</p>
                    <p>43300 Seri Kembangan,</p>
                    <p>Selangor</p>
                </div>
                <div className='space-y-4 text-sx text-white'>
                    <h5 className='font-bold text-red-600'>Follow</h5>
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                    <a href="https://www.instagram.com/miyagi.my/">Instagram</a>
                    <CameraIcon className="h-6 items-center  rounded-full text-red-600"/>
                </div>
                    <p>Facebook</p>
                </div>
                <div className='space-y-4 text-sx text-white'>
                    <h5 className='font-bold text-red-600'>Services</h5>
                    <p>Ceramic Coatings</p>
                    <p>Package Detailing</p>
                    <p>Exterior Detailing</p>
                    <p>Interior Detailing</p>
                    <p>Window Tinting</p>
                    <p>Membership Car Washes</p>
                    <p>Wheel/Rim Refurbishment</p>
                </div>
            </div>
    )
}

export default Footer
