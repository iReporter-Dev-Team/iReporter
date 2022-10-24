import React from 'react'
import AboutUs from "./AboutUs";
import Footer from "./Footer"
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
       <Navbar/>
        <AboutUs />
        <Footer/> 
    </div>
  )
}

export default Home