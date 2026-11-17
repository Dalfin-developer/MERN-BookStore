import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10 '>
      {/* About Us */}
      <div >
        <h1 className='font-bold'>About Us</h1>
        <p className='mt-2 text-justify'>Discover your next favorite read with us. From timeless classics to the latest bestsellers, our shelves are always open. Stay connected for exclusive offers, author events, and reading inspiration. Happy reading!</p>
      </div>
      {/* News Letter */}
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>News Letter</h4>
        <p className='my-2 text-justify'>Stay updated with our latest trends</p>
        <div className='flex'>
          <input type="text" placeholder='E-mail' className='border p-2 text-black bg-white' />
          <button className='bg-yellow-500 p-2 '><FaArrowRight/></button>
        </div>
      </div>
      {/* Follow section */}
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>Follow Us</h4>
        <p className='my-2 text-justify'>Let us be social</p>
        <div className='flex'>
          <FaFacebook/>
          <FaInstagram className='mx-2'/>
          <FaTwitter/>
          <FaWhatsapp className='mx-2'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
