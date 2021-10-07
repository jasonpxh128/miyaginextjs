import Image from "next/image"
import daaction from '../assests/da.jpg'

function Largecard() {
    return (
        <div>
            <section className=' relative py-16 max-w-6xl mx-auto'>
                <div className='relative h-96 min-w-[300px]'>
                    <Image
                        src ={daaction}
                        layout ='fill'
                        objectFit = 'cover'
                        className = 'rounded-2xl'
                    />
                </div>
                <div className=' absolute top-32 left-12 text-black bg-white p-3'>
                    <h3 className='text-4xl mb-3 w-full'> Paint Correction.</h3>
                    <p className=' max-w-[380px] text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestiae ipsum. Delectus veritatis doloribus, aliquam dolorum adipisci eaque cum perspiciatis natus dolor cupiditate minus, veniam ipsum est. Aut, quis magni.</p>
                    <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'> Find Out More.</button>

                </div>
            </section>
        </div>
    )
}

export default Largecard
