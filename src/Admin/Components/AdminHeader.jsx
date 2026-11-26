import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      {/* header top */}
      <div className='flex  justify-between p-4 items-center'>
        {/* logo */}
          <div className='flex items-center'>
            <img height={'50px'} width={'50px'} src="https://pngimg.com/uploads/book/book_PNG51090.png" alt="Logo" />
            <h1 className='text-2xl ms-3 font-bold '>BookStore</h1>
          </div>
          {/* logout button */}
          <button className='bg-black text-white px-4 py-1 rounded shadow-lg flex items-center hover:bg-white hover:shadow-xl hover:text-black hover:border-2  '>Logout<FaPowerOff className='ms-2'/></button>
         
        </div>
      {/* header marquee */}
      <div className='bg-black text-white text-xs p-2'>
          <marquee>Welcome admin, your all set to manage and monitior the system .Let's get into work</marquee>
      </div>
    </>
  )
}

export default AdminHeader
