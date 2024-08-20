import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16'>
       <div className='flex justify-between'>
        <h1 className='text-2xl cursor-pointer font-bold'>WORD<span className='text-3xl text-green-500'>TO</span>PDF</h1>
        <h1 className='text-2xl cursor-pointer font-bold'>Home</h1>
       </div>
    </div>
  )
}

export default Navbar
