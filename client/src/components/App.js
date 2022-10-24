import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GetStarted from "./GetStarted";
import DashBoardViewDetails from "./DashBoardViewDetails";

function App() {
  return (
    <Router>
      <div className="row mt-3">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/getstarted" element={<GetStarted />}></Route>
          <Route
            exact
            path="/interventions/:interventionId"
            element={<DashBoardViewDetails />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
