import React from 'react'
import bannerVid from '../assets/bannerVid.mp4'
const Landing = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <video autoPlay muted loop>
        <source src={bannerVid} type='video/mp4' />
      </video>
    </div>
  )
}

export default Landing