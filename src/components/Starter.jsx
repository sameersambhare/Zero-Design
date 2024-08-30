import React from 'react'
import Navbar from './Navbar'
const Starter = () => {
  return (
    <div className='w-full h-[90vh] bg-black text-white relative px-[2vw] pt-[1vw]'>
        <div className="w-full flex items-center justify-between">
        <h2 className='text-[2.5vw] font-sans'>ZERO STUDIOS is an integrated creative agency.</h2>
        <Navbar />
        </div>
        <div className="flex items-baseline justify-center w-full">
            <div className="circle w-[22vw] h-[22vw] bg-white rounded-full"></div>
            <div className="text-[30vw]">
                <h1 className='font-semibold tracking-tighter'>ZERO</h1>
            </div>
        </div>
    </div>
  )
}

export default Starter