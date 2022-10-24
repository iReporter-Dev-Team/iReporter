import React from "react";
import { BrowserRouter as Route, Routes, Router } from "react-router-dom";
import RaiseIssue from "./RaiseIssue/raise_issue";
import NavBar from "./NavBar/navbar";
import Footer from './Footer/footer';

function App() {
    return (
        <>
        <Router>
            <NavBar />
            <Routes>
                <Route exact path = '/home'></Route>
                <Route exact path = '/raiseIssue' element={<RaiseIssue />}></Route>
            </Routes>
            <Footer/>
        </Router>
        </>
    )
}

export default App