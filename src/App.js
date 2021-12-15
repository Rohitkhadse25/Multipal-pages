import React from 'react'
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Component/AboutUs';
import Services from './Component/Services';
import ContactUs from './Component/ContactUs';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
   
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<AboutUs />}></Route>
    <Route path="/service" element={<Services />}></Route>
    <Route path="/contact" element={<ContactUs />}></Route>
  
    
    
    </Routes>

   
  </BrowserRouter>
  <Footer />
    </>
    
  )
}

export default App

