import { useState, useEffect, useRef } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import ProfessionalPath from "./components/ProfessionalPath";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
function App() {
  return (
    <div className='page flex overflow-hidden'>
    <Navbar/>
    <div className={`sections w-full md:h-screen flex flex-col overflow-hidden md:flex-row transition-all duration-1000 ease-out ml-auto md:min-w-3/4 md:w-3/4 xxl:min-w-[85%] xxl:w-[85%]`}>
      <Home />
      <AboutMe />
      <ProfessionalPath />
      <Portfolio />
      <Contact />
    </div>
    </div>
  )
}

export default App
