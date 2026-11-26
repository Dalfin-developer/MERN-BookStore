import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 min-h-screen py-10 max-md:max-w-40'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{height:"100px",width:"100px",borderRadius:"50%"}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="Profiepic" />
      </div>
      {/* name */}
      <h1 className="text-center my-5 font-medium text-xl">UserName</h1>
      {/* Links */}
      <div className='flex flex-col justify-baseline items-center'>
        <div className='mt-5'><Link to={"/admin"} className='flex'><FaChartSimple className='me-2'/> DashBoard</Link></div>
        <div className='mt-5'><Link to={"/admin/resource"} className='flex'><FaDatabase className='me-2'/> Collections</Link></div>
        <div className='mt-5'><Link to={"/admin/settings"} className='flex'><FaGear className='me-2'/> Settings</Link></div>
      </div>
    </div>
  )
}

export default AdminSidebar
