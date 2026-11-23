import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl my-5'>ALL BOOKS</h1>
        <div className='md:flex mb-5'>
          <input type="text" className='border border-gray-400  p-2 rounded ' placeholder='Search By Book Title' />
          <button className='bg-blue-500 text-white p-2 ms-2 rounded md:block sm:inline-15 text-sm'>Search</button>
        </div>
        {/* Grid: filter and books card */}
        <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
          <div className='col-span-1'>
            <div className='flex justify-between'>
              <h1 className='font-bold'>Filter</h1>
              <button onClick={() => { setToggle(!toggle) }} className='text-2xl md:hidden'><FaBars /></button>
            </div>
            {/* filter category */}
            <div className={toggle ? 'block' : 'hidden md:block'}>
              <div className="mt-3">
                <input name='filtering' type="radio" id='no-filter' />
                <label className='ms-2' htmlFor="no-filter">All</label>
              </div>
              {/* Duplicate filter category */}
              <div className="mt-3">
                <input name='filtering' type="radio" id='no-filter' />
                <label className='ms-2' htmlFor="no-filter">category</label>
              </div>
              <div className="mt-3">
                <input name='filtering' type="radio" id='no-filter' />
                <label className='ms-2' htmlFor="no-filter">All</label>
              </div>
              {/* Duplicate filter category */}
              <div className="mt-3">
                <input name='filtering' type="radio" id='no-filter' />
                <label className='ms-2' htmlFor="no-filter">category</label>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
                <div className='md:grid grid-cols-4'>
                    {/* duplicate according to books  */}
                    <div className='shadow p-4 m-5'>
                      <img width={"100%"} height={"600px"} src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="" />
                      <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-blue-600 font-bold text-xl'>Author</h2>
                        <p className='text-lg mt-1'>Author</p>
                        <Link to={"/view"} className='bg-blue-700 text-white font-bold rounded mt-2 p-1'>View Book</Link>
                      </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Books
