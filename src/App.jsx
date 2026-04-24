import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';


function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>
    </div>

  )

}

export default App
