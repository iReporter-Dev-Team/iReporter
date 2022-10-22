import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import GetStarted from "./GetStarted"
import Footer from "./Footer"

function App() {
  return (
    <>
   <Router>
   <div className="row mt-3">
        <Navbar />
      <Routes>
      <Route exact path="/" element={<AboutUs/>}></Route>
      <Route exact path="/getstarted" element={<GetStarted />}></Route>
      </Routes>
      </div>
      <Footer />
    </Router>
    </>
  ) 
}

export default App;
