// 🎙
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm  navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container-fluid">
      <Link to={"/"} className="navbar-brand">
      iREP<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/327/eyes_1f440.png" alt="..." height="36"/>RTER
      
          </Link>
      
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "white" }}

              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/getstarted"
                style={{ color: "white" }}
              >
                GetStarted
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;