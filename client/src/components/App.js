import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GetStarted from "./GetStarted";




function App() {
  return (
  
   <Router>
   <div className="row mt-3">
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/getstarted" element={<GetStarted />}></Route>
      </Routes>
      </div>
    </Router>
    
  ) 
}

export default App;
