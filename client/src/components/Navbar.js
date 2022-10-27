// 🎙
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const HandleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r) => { 
      if (r.ok) {
        setUser(null);
      }
    })
  }
  return (
    <nav className="fixed-top navbar navbar-expand-sm  navbar-expand-lg navbar-dark bg-light static-top" >
      <div className="container-fluid">
      <Link to={"/"} className="navbar-brand" style={{ fontWeight: "bold",color: "#fa7670",padding:"2px" }} >
      iREPO{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/327/eyes_1f440.png" alt="..." height="36"/>*/}RTER
      </Link>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        > 
          <ul className="navbar-nav">
          {user ? (  
            <>
          <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/profile"
                //to signup
                style={{ color: "white" }}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-center"
              to="/user-landing"
              //to signup
              style={{ color: "white" }}
            >
             Raise an issue
            </Link>
          </li>
          <li className="nav-item">
          <Link
            className="nav-link d-flex justify-content-center"
            to="/"
            onClick={HandleLogout}
            //to signup
            style={{ color: "white" }}
          >
            Logout
          </Link>
        </li>
        </>
            ) : (
            <>
            {/* <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "black" }}

              >
                About Us
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/get-started"
                //to signup
                style={{ color: "black" }}
              >
                Get started
              </Link>
            </li>
          </>
          )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
