import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminDashboard() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* First section */}
        <div className='col-span-1'>
             <AdminSidebar/>
        </div>
       {/*Second section  */}
       <div>
         admin dashboard
       </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminDashboard
