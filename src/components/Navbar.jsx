import gsap from 'gsap';
import React, { useRef } from 'react'
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { navMenu } from '../constants/index'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const defaultMenu = useRef()
  const optionsMenu = useRef()
  const showNavbar = () => {
    defaultMenu.current.style.display = "none"
    optionsMenu.current.style.display = "block"
    gsap.timeline().to('.navbar', {
      borderRadius: "1.5vw",
      width: "24vw",
      duration: "0.6"
    }, "s1")
      .to('.navbar', {
        height: "40vw",
        duration: "0.4"
      }, "s1")
  }
  const hideNavbar = () => {
    defaultMenu.current.style.display = "block"
    optionsMenu.current.style.display = "none"
    gsap.timeline().to('.navbar', {
      borderRadius: "1.5vw",
      width: "10vw",
      duration: "0.6"
    }, "s1")
      .to('.navbar', {
        height: "3vw",
        duration: "0.4"
      }, "s1")
  }
  return (
    <div className='navbar py-[0.4vw] z-[999] right-[2vw] top-[2vw] fixed overflow-hidden  bg-black text-white uppercase rounded-[2vw] border-[0.1vw]'>
      <div ref={defaultMenu} className="default-menu w-[10vw] h-[2vw] flex items-center gap-[1.5vw] px-[1.4vw] relative" >
        <h1 className='text-[1.2vw]  font-normal absolute top-1/2 -translate-y-1/2'>Contact</h1>
        <IoIosMenu className='text-[2vw] absolute cursor-pointer right-[1vw] top-1/2 -translate-y-1/2' onClick={() => { showNavbar() }} />
      </div>
      <div ref={optionsMenu} style={{ display: "none" }} className="options-menu py-[3vw]  h-full w-full flex flex-col gap-[1vw] items-center justify-center">
        <IoIosClose className='text-[3vw] absolute cursor-pointer right-[2vw] top-[2vw]' onClick={() => { hideNavbar() }} />
        <ul className='w-full text-center'>
          {navMenu.map((item, index) => {
            return (
              <Link to={item.url}><li className='text-[3vw]'>{item.id}</li></Link>
            )
          })}
        </ul>
        <div className="w-[80%] bg-zinc-700 rounded-xl justify-center items-center my-[1vw] mx-[2vw] px-[1vw] flex gap-[1vw]">
          <h1 className='text-[1.7vw]'>❤️</h1>
          <h1 className='text-[1.7vw]'>❤️</h1>
          <h1 className='text-[1.7vw]'>❤️</h1>
          <h1 className='text-[1.7vw]'>❤️</h1>
        </div>
        <div className="w-full border-white border-[0.1vw] justify-end py-[0.5vw] text-right pr-[2vw]">
          <h1 className=''>new site</h1>
        </div>
        <div className="w-full flex items-center justify-between px-[1vw] py-[2vw]">
          <h2>@zero.studios</h2>
          <h2>some1@zero.nyc</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar