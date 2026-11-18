import React from 'react'
import { FaEye, FaUser } from 'react-icons/fa'

function Auth({insideRegister}) {
  return (
    <div  className='w-full min-h-screen flex  justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center'>
      <div className='p-10'>
         <h1 className='font-bold text-5xl text-center text-white'>BOOKSTORE </h1>
         <div style={{width:'400px' ,borderRadius:"30px"}} className='bg-black p-10 flex flex-col items-center justify-center my-5 text-white'>
          <div style={{borderRadius:'50%'}} className='p-5 border-2 border-white '><FaUser className=' text-3xl'/></div>
           <h1 className='text-2xl mt-4'>{insideRegister?"Register":"login"}</h1>
           <form className='my-3 w-full'> 
            {/* user name */}
            {
              insideRegister && 
              <input type="text" placeholder='username' className='bg-white text-black p-2 w-full rounded-2xl' />
            }
            {/* email */}
              <input type="email" placeholder='email' className='bg-white text-black p-2 my-5 w-full rounded-2xl' />
            {/* password */}
              <div className='flex items-center'>
                  <input type="password" placeholder='password' className='bg-white text-black p-2 w-full rounded-2xl' />
                  <FaEye style={{marginLeft:"-30px"}} className='text-black cursor-pointer'/>
              </div>
           </form>
         </div>
      </div>
    </div>
  )
}

export default Auth
