import Image from "next/image"
import whatwedo1 from '../assests/whatwedo1.jpg'
import whatwedo2 from '../assests/whatwedo2.jpg'

function Midcontent() {
    return (
        <div className='grid grid-cols-2 py-3'>
            <div className='relative h-[400px] w-[500px] mx-auto hidden md:block'>
                    <Image
                        src = {whatwedo2}
                        layout = "fill"
                        className=' rounded-xl'
                    />
            </div>
            <div>
                <h1 className='text-black py-6 font-bold text-center'>Paint Correction.</h1>
                <p className='text-black pl-10 text-center'>Got a great looking vehicle? Want to make it better looking? Ceramic coating packages bring out the amazing, deep shine in your paint while our options for window tint and color-change vinyl can add anything from a custom touch to an entire transformation.</p>
                <ul className='py-6 font-bold text-center'>
                    <li>Ceramic Coatings.</li>
                    <li>Window Tintings.</li>
                    <li>Waxing</li>
                </ul>
            </div>

            
        </div>
    )
}

export default Midcontent
