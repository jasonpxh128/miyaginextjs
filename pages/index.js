import Head from 'next/head'
import Cards from '../Components/Cards'
import Header from '../Components/Header'
import Herobanner from '../Components/Herobanner'
import Largecard from '../Components/Largecard'
import Midcontent from '../Components/Midcontent'
import Footer from './../Components/Footer';

// Images
// import heroimage from "../assests/rolls2.jpg"
import heroimage from "../assests/services.jpg"
import heroimage2 from "../assests/hero4.jpg"
// import heroimage2 from "../assests/alphard.jpg"
import midimage1 from '../assests/actioncard1.jpg'
import midimage2 from '../assests/actioncardpackage.jpg'
import midimage3 from '../assests/actioncardwax.jpg'
import midimage4 from '../assests/actioncardtint.jpg'
import midimage5 from '../assests/actioncardwash.jpg'
import midimage6 from '../assests/actioncardinterior.jpg'



export default function Home() {
  return (
    <div className=" bg-white">
      <Head>
        <title>Miyagis Malaysia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/> 
      </Head>
      <Header/>
      <section>
        <Herobanner
          hero = {heroimage}
          firsttext = 'Wax on'
          secondtext = 'Wax Off'
          buttontext = 'Get a free quote'
        />
      </section>
      <main className=' max-w-6xl mx-auto'>
        <section>
          <p className=' text-5xl font-semibold uppercase text-center text-bold mt-10 font-montserrat tracking-widest pb-5 border-b border-red-600'> What we do</p>
          
          {/* <p className='text-xl font-semibold text-red-600 text-center text-bold mb-3'>____________________________________________</p> */}
          <p className=' text-sm text-center  mt-5 mb-10'> So many options to choose from, but which suits your needs most?</p>
          {/* <Cards/> */}
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-1 font-montserrat'>
            <Midcontent
              image = {midimage1}
              text = 'Ceramic Coating'
            />
            <Midcontent
              image = {midimage2}
              text = 'Package Detailing'
            />
            <Midcontent
              image = {midimage3}
              text = 'Polish and Waxing'
            />
            <Midcontent
              image = {midimage4}
              text = 'Window Tinting'
            />
            <Midcontent
              image = {midimage5}
              text = 'Membership Car Wash'
            />
            <Midcontent
              image = {midimage6}
              text = 'Interior Detailing'
            />
          </div>
        </section>
      </main>
      <section className='py-10'>
        <Herobanner className='bg-opacity-30'
          hero = {heroimage2}
          firsttext = 'Exclusive Packages Available'
          secondtext = 'all make, all models'
          buttontext = 'Explore Packages >'
        />
      </section>
      <section className='bg-gray-100'>
        {/* <Largecard/> */}
      </section>
      
      <section>
      <Footer/>

      </section>      

    </div>
  )
}
