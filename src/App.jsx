import React from 'react'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Starter  from './components/Starter'
import Header1 from './components/Header1'
import Work1 from './components/Work1'
import Work2 from './components/work2'
import work2 from './assets/work2.png'
import work3 from './assets/work3.png'
import Work3 from './components/Work3'
import {header1,header2} from './constants'
import Projects from './components/Projects'
import Categories from './components/Categories'
const App = () => {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <Starter/>
      <Landing />
      <Header1 content={header1}/>
      <Work1/>
      <Work2 image={work2}/>
      <Work3 image={work3}/>
      <Header1 content={header2}/>
      <Projects/>
      <Categories/>
      <Footer />
    </div>
  )
}

export default App