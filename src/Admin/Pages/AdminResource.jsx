import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminResource() {
  const [currentTab,setCurrentTab]=useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* First section */}
        <div className='col-span-1'>
             <AdminSidebar/>
        </div>
       {/*Second section  */}
       <div className="col-span-4 px-10 py-5">
        <h1 className='text-center font-bold text-2xl mb-10'>All resources</h1>
        {/* button for view books and users  */}
        <div className='flex justify-center items-center font-semibold text-lg  my-3'>
              <p onClick={()=>(setCurrentTab(1))} className={currentTab==1?'p-4 border-gray-200 border-t-2 border-r-2 rounded cursor-pointer ':'p-4 border-gray-200 border-b-2 rounded cursor-pointer '}>Books</p>
              <p onClick={()=>(setCurrentTab(2))} className={currentTab==2?'p-4 border-gray-200 border-t-2 border-r-2 border-l-2 rounded cursor-pointer ':'p-4 border-gray-200 border-b-2 rounded cursor-pointer '}>Users</p>
          </div> 
          {/* view books onclick book */}
          {currentTab==1&& 
          <div className='md:grid grid-cols-4 w-full my-10'>

          <div className='shadow-2xl rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="Book image" />
            <div className='flex flex-col items-center justify-center mt-4'>
              <h1 className='text-blue-500 font-semibold text-lg'>Author</h1>
              <h1 className='text-lg font-semibold'>Title</h1>
              <p className='font-medium text-sm text-red-500'>Price</p>
              <button className='bg-green-600 text-white w-full py-1 rounded shadow-lg'>Approve</button>
            </div>
          </div>

        </div>}
          {/* view users onclick book*/}
          {currentTab==2&&
          <div className='md:grid grid-cols-3 w-full my-5'>
          {/* Duplicate accorfding to users  */}
          <div className='rounded bg-gray-200 p-6 m-2 shadow-gray-100 shadow-xl'>
            <p className='text-red-500 font-bold text-lg ms-5 '>Id:</p>
            <div className='flex items-center mt-5'>
              <img style={{height:"80px",width:"80px",borderRadius:"50%"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="Profiepic" />

              <div className='flex flex-col gap-2 justify-center ms-5'>
                  <p className='text-blue-500'>User Name</p>
                  <p className='text-xs'>usernmae@gmail.com</p>
              </div>
            </div>
          </div>
          </div>
          }
       </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource
