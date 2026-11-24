import React from 'react'

function PurchaseHistory() {
  return (
    <>
      <div className='p-30 my-30 shadow rounded'>
        <div className='bg-gray-200 rounded p-5 mt-4'>
          <div className='md:grid grid-cols-[3fr_1fr]'>
            <div>
                <h1 className='text-3xl font-extrabold'>Title</h1>
                <h2 className='text-2xl font-bold my    -2'>Author</h2>
                <p className='text-lg text-blue-500 font-semibold'>Price</p>
                <p className='text-lg  font-semibold mt-10'>Abstract</p>
                <div className='flex mt-10'>
                     <img width={"120px"} height={"120px"} src={"/purchase.png"}lt="pending" />
                </div>
            </div>
            {/* Second section */}
            <div className='px-5 mt-5 md:mt-0'>
                <img className='w-full' src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="bookImage" />
                 
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseHistory
