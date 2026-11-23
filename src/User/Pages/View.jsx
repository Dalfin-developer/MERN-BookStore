import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  const [modal,setModal]=useState()
  return (
    <>
     <Header/>
     <div className='md:m-10 m-5'>
        <div className='border shadow border-gray-200 p-4'>
            <div className='md:grid grid-cols-4 gap-x-4'>
              {/* image */}
              <div className='col-span-1'>
                <img src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt=" New book" />
              </div>
              {/* contents-1 */}
              <div className='col-span-3'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-2xl'>Title</h3>
                    <button onClick={()=>{setModal(true)}} className='font-bold '><FaEye/></button>
                </div>
                <h2 className='font-bold text-blue-500'>Author</h2>
                <div className='md:grid grid-cols-3 gap-7 my-10'>
                      <p className='font-bold'>Publisher :</p>
                      <p className='font-bold'>Language :</p>
                      <p className='font-bold'>No of page :</p>
                      <p className='font-bold'>Category :</p>
                      <p className='font-bold'>ISBN :</p>
                      <p className='font-bold'>No of Pages :</p>
                      <p className='font-bold'>Original Price :</p>
                </div>
                <div className='my-4 md:my-10'>
                  <h4 className='font-bold  '>Abstract :</h4>
                </div>
                <div className='flex justify-end'>
                  <Link to={'/books'} className=' flex items-center gap-2  bg-blue-800 text-white p-2 font-bold'><FaBackward/> Back</Link>
                  <button className='ms-3 bg-green-700 text-white font-bold p-2'>Buy $ 89</button>
                </div>
              </div>
            </div>
        </div>   
        {/*Modal*/} {modal && 
        <div onClick={()=>setModal(false)} className='relative z-10 overflow-y-auto'>  
         <div  className='bg-gray-500/75 fixed inset-0'>
           <div className='flex justify-center items-center min-h-screen'>
              <div className='bg-white w-100 md:w-250 '>
                {/* modal title */}
                <div className='bg-black text-white p-3'>
                  <h1>Book images</h1>
                </div>
                {/* modal body */}
                <div className='relative p-5'>
                  <p className='flex items-center text-blue-500 '><FaCamera className='me-2'/>camera clicks of the books</p>
                  <div className='flex flex-wrap my-5'>
                    {/* Duplicate image */}
                      <img className='md:w-75 w-25 md:me-2 mb-2 md:mt-0' src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="book image" />
                      <img className='md:w-75 w-25 md:me-2 mb-2 md:mt-0' src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="book image" />
                      <img className='md:w-75 w-25 md:me-2 mb-2 md:mt-0' src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="book image" />
              
                  </div>
                </div>
              </div>
           </div>
         </div>
        </div> }          
     </div>
     <Footer/>
    </>
  )
}

export default View
