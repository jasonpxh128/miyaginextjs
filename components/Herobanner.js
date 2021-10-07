
import Image from "next/image"



function Herobanner({firsttext, secondtext,hero, buttontext}) {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] z-10">
            <Image
                src = {hero}
                layout = 'fill'
                objectPosition = 'middle'
                objectFit = 'cover'
            />
            <div className=" absolute top-1/4 justify-center w-full text-center z-20 flex flex-row">
                <div className="  text-center uppercase ">
                    <p className=" text-white text-6xl pr-32 items-center hidden md:block">{firsttext}</p>
                    <p className=" text-red-500 text-7xl pl-28 hidden md:block">{secondtext}</p>                    
                    {/* <button className="text-yellow-900 bg-white text-lg px-8 py-2 shadow-md rounded-full uppercase mt-1 font-semibold hover:shadow-xl active:scale-90 transition duration-75">Get a free quote</button>  */}
                    <button className="text-white text-lg px-10 py-2 shadow-md  rounded-full uppercase mt-1 font-normal transition duration-150 ease-out hover:text-black hover:scale-110 hover:bg-red-600">{buttontext}</button> 
                </div>
            </div>

           

        </div>
    )
}

export default Herobanner
