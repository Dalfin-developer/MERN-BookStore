import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  const [togglePasswordType,setTogglePasswordType]=useState(false)
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
                  <input type={togglePasswordType?"password":"text"} placeholder='password' className='bg-white text-black p-2 w-full rounded-2xl' />
                  {
                    togglePasswordType?
                    <FaEyeSlash onClick={()=>{setTogglePasswordType(false)}} style={{marginLeft:"-30px"}} className='text-black cursor-pointer'/>
                    :
                    <FaEye onClick={()=>{setTogglePasswordType(true)}} style={{marginLeft:"-30px"}} className='text-black cursor-pointer'/>
                  } 
              </div>
           </form>
           {/* Forgot password */}
           <div className='flex justify-between'>
                  <p className='text-xs text-orange-400'>never share your password with others</p>
                  {!insideRegister &&
                    <button className='text-xs underline  ms-20'>Forgot Password</button>
                    }
           </div>
           {/* LOgin or Register button */}
           <div className='my-5 text-center w-full'>
            {insideRegister?
            <button type="button" className='bg-green-500 w-full p-2 rounded'>Register</button>
            :
            <button type="button" className='bg-green-500 w-full p-2 rounded'>Login</button>
            
            }
           </div>
           {/* Google auth */}
           {
            !insideRegister &&
            <div>
              <p>-----------------or-----------------</p>
              <div className='flex justify-center items-center w-full my-5'>
                Google Authentication
              </div>
            </div>
           }
           {/* New already user */}
           <div>
              {
                insideRegister?
                <p className='text-blue-500'>Exising User?  <Link to={"/login"} className='ms-4'>Login</Link></p>
                :
                <p className='text-blue-500'>New User?  <Link to={'/register'} className='ms-4'>Register</Link></p>
              }
           </div>
         </div>
      </div>
    </div>
  )
}

export default Auth
