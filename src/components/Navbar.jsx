import React from 'react'
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='py-[0.4vw] px-[1.4vw] bg-black text-white uppercase rounded-full border-[0.1vw]'>
      <div className="flex items-center gap-[1.5vw]">
        <h1 className='text-[1.2vw] font-light'>Contact</h1>
        <IoIosMenu className='text-[2vw]' />
      </div>
    </div>
  )
}

export default Navbar