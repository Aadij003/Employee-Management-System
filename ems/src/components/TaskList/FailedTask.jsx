import React from 'react'

const FailedTask = () => {
  return (
       <div className='shrink-0 h-full bg-yellow-700 p-5 w-75 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 rounded px-3 text-sm py-1 '>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quae consequuntur aspernatur laudantium nesciunt reiciendis.
        </p>
        <div className='mt-2'>
            <button className='w-full'>Failed</button>
        </div>
      </div>

  )
}

export default FailedTask
