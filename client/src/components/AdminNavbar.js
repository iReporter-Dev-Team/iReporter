import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ user, setUser }) => {

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
    <nav className="fixed-top navbar navbar-expand-sm  navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container-fluid">
      <Link to={"/"} className="navbar-brand">
      iREPO{/* <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/327/eyes_1f440.png" alt="..." height="36"/>*/}RTER
      </Link>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        > 
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/dashboard"
                //to signup
                style={{ color: "white" }}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
            <Link
              className="nav-link d-flex justify-content-center"
              to="/users"
              //to signup
              style={{ color: "white" }}
            >
             Users
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
