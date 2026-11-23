
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Contact from './User/Pages/Contact'
import Books from './User/Pages/Books'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'
import Auth from './Pages/Auth'
import AdminResource from './Admin/Pages/AdminResource'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminSettings from './Admin/Pages/AdminSettings'
import PreLoader from './Components/PreLoader'
import { useState } from 'react'




function App() {
  const [isLoading,setLoading]=useState(true)
  setTimeout(()=>{
    setLoading(false)
  },1000)

  return (
    <>
    <Routes>
      <Route path='/' element={isLoading?<PreLoader/>:<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister />}/>

      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/admin/resource' element={<AdminResource/>}/>
      <Route path='/admin/settings' element={<AdminSettings/>}/>
    </Routes>
    </>
  )
}

export default App
