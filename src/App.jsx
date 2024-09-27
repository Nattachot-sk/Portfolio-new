import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import Myworking from './components/Work/Myworking';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollTotop/ScrollToTop';


function App() {


  return (
    <>
        <Hero />  
        <About />
        <Skill />
        <Myworking />
        <Contact />
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default App
