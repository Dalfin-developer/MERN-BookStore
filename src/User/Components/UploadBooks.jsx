import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
  return (
    <>
        <div className='bg-gray-600 p-10 md:my-20 my-10 md:mx-10 mx-5 '>
            <h1 className='text-center text-2xl font-bold'>Upload Book Details</h1>
            {/* grid */}
            <div className='grid grid-cols-2 md:mt-10 mt-5 w-full gap-4'>
                {/* First section */}
                <div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Cover Image URL' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Total Pages' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Original Price' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <textarea rows={"5"} type="text" placeholder='Abstract' name="Abstract" id="abstract" className='w-full bg-white p-2 rounded' />
                    </div>
                </div>
                {/* Second section */}
                <div>
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className='w-full bg-white p-2 rounded' />
                    </div>
                    <div className='my-8 flex justify-center items-center'>
                        <label htmlFor="UploadImage">
                            <input type="file" id='UploadImage' hidden />
                            <img style={{borderRadius:"50%"}} height={"150px"} width={"200px"} src="https://tse4.mm.bing.net/th/id/OIP.cSA3urhjSmO5TEzR0i3BQQHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                        </label>
                    </div>
                    <div className='flex justify-center items-center mb-5' >
                            <img height={"70px"} width={"70px"} src="https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg" alt="" />
                            <label htmlFor="bookUpload" className='ms-2'>
                                <input type="file" id="bookUpload" hidden />
                                <FaPlus className='text-2xl '/>
                            </label>
                    </div>
                </div>
            </div>
            {/* Reset and add books */}
            <div className='flex md:justify-end justify-center md:mt-10 md:px-5 px-1'>
                <button className='bg-red-800 text-white md:text-xl font-semibold p-2 rounded  me-4 hover:bg-white hover:text-black'>Reset</button>
                <button  className='bg-green-900 text-white md:text-xl font-semibold p-2 rounded   hover:bg-white hover:text-black'>Add Book Details</button>
            </div>
        </div>
    </>
  )
}

export default UploadBooks
