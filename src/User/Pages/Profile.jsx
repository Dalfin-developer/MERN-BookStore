import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'

function Profile() {
  const [currentTab,setCurrentTab]= useState(1)
  return (
    <>
      <Header/>
      <div style={{height:'200px'}} className='bg-black'>
      </div>
      {/* Profile Picture */}
          <div style={{height:"230px",width:"230px",borderRadius:"50%",marginLeft:"75px",marginTop:"-130px"}} className='bg-white'>
            <img style={{height:"230px",width:"230px",borderRadius:"50%",padding:"15px"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
          </div>
        {/* Username and edit option */}
          <div className='flex justify-between px-20'>
          <div className='flex items-center '>
            <h1 className='font-bold md:text-3xl text-2xl'>User Name</h1>
            <FaCircleCheck className='text-blue-500 ms-3'/>
          </div>
          <div className='font-bold'>
            <Edit/>
          </div>
          </div>
            <p  className='text-xl font-semibold md:px-20 px-5 '>bio</p>  
            <p className='text-justify md:mx-20 m-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, atque voluptatem, quae repellat veniam maxime exercitationem tenetur, commodi doloremque distinctio non temporibus sapiente quas aut quo ducimus sunt facilis alias.
            Iure assumenda ut sint magni, corrupti voluptas ipsam suscipit reprehenderit dolore, minus autem beatae incidunt eaque magnam quasi sed facilis dolorem soluta obcaecati esse accusantium. Numquam consectetur blanditiis tempora eum!
            Mollitia, inventore cupiditate! Sint expedita qui impedit id vel. Modi voluptatibus expedita corporis excepturi ipsa, rem, vero iste asperiores quisquam quia consectetur. Perspiciatis dolores a debitis tempora quo illo quam?</p>       
            
            {/* upload book ,view status purchase history status  */}

            <div className='flex justify-center items-center font-bold text-lg  my-3'>
              <p onClick={()=>(setCurrentTab(1))} className={currentTab==1?'p-4 border-gray-200 border-t-2 border-r-2 rounded cursor-pointer ':'p-4 border-gray-200 border-b-2 rounded cursor-pointer '}>Upload Book</p>
              <p onClick={()=>(setCurrentTab(2))} className={currentTab==2?'p-4 border-gray-200 border-t-2 border-r-2 border-l-2 rounded cursor-pointer ':'p-4 border-gray-200 border-b-2 rounded cursor-pointer '}>Upload Book Status</p>
              <p onClick={()=>(setCurrentTab(3))} className={currentTab==3?'p-4 border-gray-200 border-t-2 border-l-2 rounded cursor-pointer ':'p-4 border-gray-200 border-b-2 rounded cursor-pointer '}>Purchase History</p>
            </div> 
            {currentTab==1&&<p>Upload Books</p>}
            {currentTab==2&&<p>Upload Book Status</p>}
            {currentTab==3&&<p>Purchase History</p>}
      <Footer/>
    </>
  )
}

export default Profile
