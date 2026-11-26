import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* First section */}
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        {/*Second section  */}
        <div className='col-span-4 px-10 py-5'>
          <h1 className='text-center font-bold text-2xl mb-10'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center '>
            {/* First section */}
            <div className=''>
              <h2 className='font-bold text-xl mb-3'>Welcome, Admin 👋</h2>
              <p className='mb-10 font-medium text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
              <h4 className='my-5 font-bold text-lg'>🔧 What You Can Manage in This Section:</h4>
              <ul className='flex flex-col gap-2 font-medium'>
              <p className=''>✏️ Update personal details (name, email, role, profile picture)</p>
              <p>🔐 Change or reset your password</p>
              <p>📢 Configure notification and alert preferences</p>
              <p>👥 Manage permissions based on assigned access level</p>
              <p>🧩 Customize dashboard visibility and layout</p>
              </ul>
              <p className='mt-10 text-justify font-medium'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
               
            </div>
            {/* second section */}
            <div className='bg-blue-200 p-6 rounded-2xl m-10'>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
