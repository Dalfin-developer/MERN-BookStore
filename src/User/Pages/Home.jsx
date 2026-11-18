import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      {/* Hero section */}
      <div style={{ height: '600px' }} className='flex flex-col justify-center items-center bg-[url(/landing.jpg)] bg-cover text-white'>
        <div style={{ height: "600px", backgroundColor: "rgba(0,0,0,0.6)" }} className='w-full flex flex-col justify-center items-center'>
          <h1 className='md:text-6xl text-3xl font-bold'>Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
          <div className='mt-9 flex items-center  text-black'>
            <input type="text" placeholder='Search a book' className='bg-white rounded-2xl w-100 p-2' />
            <FaSearch className='cursor-pointer' style={{ marginLeft: "-40px" }} />
          </div>
        </div>
      </div>
      {/* New arrivals  */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
        <h1 className='text-4xl font-bold'>New Arrivals</h1>
        <h2 className='text-3xl my-2'>Explore our latest collections</h2>
        {/* Duplicate according to books  */}
        <div className='md:grid grid-cols-4 w-full my-10'>

          <div className='shadow-2xl rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="Book image" />
            <div className='flex flex-col items-center justify-center mt-4'>
              <h1 className='text-blue-500 font-bold text-xl'>Author</h1>
              <h1 className='text-lg font-bold'>Title</h1>
              <p className='font-bold text-red-500'>Price</p>
            </div>
          </div>

        </div>
        {/* Link */}
        <div className='my-10 '>
          <Link to={'/books'} className="bg-black text-white rounded-xl p-2  hover:bg-white hover:border-2 hover:text-black ">Explore more...</Link>
        </div>
      </section>
      <section className='md:grid grid-cols-2 items-center gap-10 md:my-10 px-10'>
        <div className='text-center '>
          <h1 className='font-bold text-xl'>FEATURED AUTHORS</h1>
          <h1 className='text-xl'>Captivates with every word</h1>
          <p className='text-justify my-3'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
          <p className='text-justify'> Our Author Features include:</p>

          <p className='text-justify my-3'>  <span className='font-bold'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
          <p className='text-justify my-3'>  <span className='font-bold'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
          <p className='text-justify my-3'>  <span className='font-bold'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
        </div>
        <div className='p-5 text-center'>
            <img src="https://th.bing.com/th/id/OIP.gEbwCzYD0HIbl_vpvZBnXAAAAA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="author" />
        </div>
      </section>
      {/* Testimonials  */}
       <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
        <h1 className='text-2xl font-bold'>Testimonials</h1>
        <h2 className='text-1xl my-2'>See what other peoples are saying</h2>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={"200px"} height={'200px'} style={{borderRadius:"50%"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person " />
          <h1 className='font-semibold text-lg my-3'>Luther King</h1>
          <p className='text-justify'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
        </div>      
        
      </section>
      <Footer />
    </>
  )
}

export default Home
