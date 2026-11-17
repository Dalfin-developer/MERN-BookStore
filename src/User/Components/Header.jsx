import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const [toggle,setToggle]= useState()
  
  return (
    <>
      {/* Header top part  */}
      <div className='grid grid-cols-3  p-3 '>
        {/* logo */}
        <div className='flex items-center'>
          <img height={'50px'} width={'50px'} src="https://pngimg.com/uploads/book/book_PNG51090.png" alt="Logo" />
          <h1 className='text-2xl ms-3 font-bold md:hidden'>BookStore</h1>
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>Bookstore</h1>
        </div>
        {/* login */}
        <div className='md:flex items-center justify-end hidden'>
          <FaInstagram />
          <FaTwitter className='mx-2' />
          <FaFacebook />
          <Link to={'/login'} className='flex items-center ms-3 border px-3 py-1 rounded-2xl hover:bg-black hover:text-white'><FaUser className='me-1' /> Login</Link>
        </div>
      </div>
      {/* Header links  */}
      <nav className='bg-black text-white md:flex justify-center items-center p-3 '>
        {/* Menu and login at small screen  */}
        <div className='flex justify-between text-1xl md:hidden'>
          <button onClick={()=>setToggle(!toggle)}><FaBars /></button>
          <Link to={'/login'} className='flex items-center ms-3 border px-3 py-1 rounded-2xl hover:bg-white hover:text-black'><FaUser className='me-1' /> Login</Link>

        </div>
        <ul className={toggle?'flex flex-col':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4'>Home</Link></li>
          <li><Link to={'/books'} className='md:mx-4'>Books</Link></li>
          <li><Link to={'/contact'} className='md:mx-4'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
