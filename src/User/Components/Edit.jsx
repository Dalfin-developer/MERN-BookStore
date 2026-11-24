import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

function Edit() {
  const [editStatus, setEditStatus] = useState(false)
  const [offcanvas,setOffcanvas] =useState(false)
  return (
    <div>
      {/* Button */}
      <button onClick={()=>{setOffcanvas(true)}} className='flex items-center justify-center bg-black text-white p-2 rounded hover:bg-white hover:text-black hover:border-1'>
        <FaPen className='me-2' /> Edit
      </button>
      {/* off canvas design */}
      {offcanvas && 
       <div className='bg-gray-500/65 inset-0 fixed h-full w-full'>
        <div className='bg-white h-full z-50 fixed md:w-90 w-50 top-0 left-0'>
          {/* Head */}
          <div className='flex justify-between text-white items-center mb-5 bg-black p-3 text-2xl font-medium'>
            <h1 >Update User Profile</h1>
            <FaXmark onClick={()=>{setOffcanvas(false)}} />
          </div>
          {/* Body */}
          <div className="relative flex justify-center items-center my-5">
            <label>
              <input type="file" hidden />
              <img
                className="h-[100px] w-[100px] rounded-full object-cover"
                src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
                alt="profile"
              />
  
              <button className="absolute bottom-0 right-[40%] bg-black text-white p-2 rounded z-50">
                <FaPen />
              </button>
            </label>
          </div>

          {/* User name */}
          <div className='mb-3 w-full px-5'>
            <input type="text" placeholder='username' className='w-full bg-gray-200 rounded p-2' />
          </div>
          {/* Password */}
          <div className='mb-3 w-full px-5'>
            <input type="password" placeholder='password' className='w-full bg-gray-200 rounded p-2' />
          </div>
          {/* new password */}
          <div className='mb-3 w-full px-5'>
            <input type="password" placeholder='new password' className='w-full bg-gray-200 rounded p-2' />
          </div>
          {/* Bio */}
          <div className='mb-3 w-full px-5'>
            <input type="text" placeholder='Bio' className='w-full bg-gray-200 rounded p-2' />
          </div>
          {/* Reset and Update button */}
          <div className='flex justify-end mt-5 w-full px-3'>
            <button className='bg-yellow-600 text-white font-bold px-4 py-1 rounded me-3'>RESET</button>
            <button className='bg-green-600 text-white font-bold px-4 py-1 rounded me-3'>UPDATE</button>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Edit
