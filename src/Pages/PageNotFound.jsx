import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhvMDRxbXJ4YmkzaXU5bmZmZXJjb21leWliaGFua2Vldm41YjhjYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vXCu2qPv6TmsSwrjCr/200.webp" alt="" />
      <h1 className='text-xl my-3'>Oh No!</h1>
      <h2 className='text-2xl font-bold'>Look Like You Are Lost</h2>
      <p className='my-3'>The Pages you are looking for is not available</p>
      <Link to={"/" } className='bg-black text-xl text-white mt-3 px-3 py-2 rounded'>Home</Link>
    </div>
  )
}

export default PageNotFound
