import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'

function Edit() {
 const [editStatus,setEditStatus]=useState(false)
  return (
    <div>
      {/* Button */}
          <button className='flex items-center justify-center bg-black text-white p-2 rounded hover:bg-white hover:text-black hover:border-1'>
           <FaPen className='me-2'/> Edit
          </button>
      {/* off canvas design */}
    </div>
  )
}

export default Edit
