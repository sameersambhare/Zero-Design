import React from 'react'
import work1 from '../assets/work1.mp4'
const Work1 = () => {
  return (
    <div className='w-full h-screen bg-black px-[2vw] '>
        <div className="rounded-[2vw] w-full h-full overflow-hidden items-center justify-center flex">
        <video autoPlay muted loop className=''>
            <source src={work1} type='video/mp4' width={"100%"} height={"100%"}/>
        </video>
        </div>
    </div>
  )
}

export default Work1