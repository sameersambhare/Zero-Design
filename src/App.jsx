import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  )
}

export default App