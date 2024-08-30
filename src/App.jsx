import React from 'react'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Starter  from './components/Starter'
const App = () => {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <Starter/>
      <Landing />
      <Footer />
    </div>
  )
}

export default App