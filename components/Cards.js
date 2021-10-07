import card1 from "../assests/actioncard1.jpg"
// import card2 from "../assests/actioncard2.jpg"
// import card3 from "../assests/actioncardwax.jpg"
// import card4 from "../assests/actioncardtint.jpg"
// import card5 from "../assests/actioncardwash.jpg"
import Image from 'next/image'


function Cards() {
    return (
        <div className=" flex flex-row space-x-6 overflow-scroll hide-scrollbar  p-5 w-full">
            <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out " >
                <div className='relative h-80 w-80 '>
                    <Image
                        src = {card1}
                        layout = "fill"
                        className=' rounded-xl'
                    /> {/*the image is sized relative to it's parent's container*/}
                </div>
                <h3 className=" text-2xl mt-1 text-gray-800">Ceramic Coating</h3>
            </div>

            <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out " >
                <div className='relative h-80 w-80 '>
                    <Image
                        src = {card1}
                        layout = "fill"
                        className=' rounded-xl'
                    /> {/*the image is sized relative to it's parent's container*/}
                </div>
                <h3 className=" text-2xl mt-3 text-gray-800">Debadging</h3>
            </div>

            <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out " >
                <div className='relative h-80 w-80 '>
                    <Image
                        src = {card1}
                        layout = "fill"
                        className=' rounded-xl'
                    /> {/*the image is sized relative to it's parent's container*/}
                </div>
                <h3 className=" text-2xl mt-3 text-gray-800">Window Tinting</h3>
            </div>
            
            <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out " >
                <div className='relative h-80 w-80 '>
                    <Image
                        src = {card1}
                        layout = "fill"
                        className=' rounded-xl'
                    /> {/*the image is sized relative to it's parent's container*/}
                </div>
                <h3 className=" text-2xl mt-3 text-gray-800">Paint Correction</h3>
            </div>

            <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out " >
                <div className='relative h-80 w-80 '>
                    <Image
                        src = {card1}
                        layout = "fill"
                        className=' rounded-xl'
                    /> {/*the image is sized relative to it's parent's container*/}
                </div>
                <h3 className=" text-2xl mt-3 text-gray-800">Interior Detailing</h3>
            </div>
        </div>

            
            

            
            

            
            
    )
}



export default Cards
