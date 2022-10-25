import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../SignIn/SignIn.css";
// import { MdEmail } from "react-icons/md";
// import { MdLock } from "react-icons/md";

function SignIn({ onLogin, is_admin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, is_admin }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => { 
          setIsLoading(false)
          if (user.is_admin) {
            onLogin(user)
            navigate('/dashboard')
          } 
          else {
            onLogin(user)
            navigate('/')
          }
      })}
      else {
        r.json().then((err) => setErrors([err.errors]));
      }
    });
  }

  return (
    <div className='sign-in-page'>
      <div className="sign-in-holder">
      <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center"}}>iReporter</h2>
      <label>Email</label>
      {/* <div className="form-field-login"> */}
        {/* <MdEmail className="login-icon" style={{ color: "#c60021", borderRight: "1px solid #000"}}/> */}
        <input 
        className='login-input'
        type="email" 
        placeholder='Email'
        required
        onChange={(e) => setEmail(e.target.value)}
        />
        {/* </div> */}
        <label>Password</label>
        {/* <div className="form-field-login"> */}
        {/* <MdLock className="login-icon" style={{ color: "#c60021", borderRight: "1px solid #000" }}/> */}
        <input 
        className='login-input'
        type="password" 
        placeholder='Password'
        required
        onChange={(e) => setPassword(e.target.value)}
        />
        {/* </div> */}
        <div>
        <input 
        type="submit" 
        value={isLoading ? "Logging you in...": "Login"} 
        />
        </div>
        <div>
          {errors.map((error) => (
            <p key={error} style={{ color: "red" }}>{error}</p>
          ))} 
        </div>
        <p style={{ textAlign: "center", marginTop: "20px" }}>New to iReporter?</p>
        <Link to="/get-started" style={{ textDecoration: "none", color: "#c60021", textAlign: "center", marginTop: "-5px" }}>Sign Up</Link>
      </form>
      </div>
    </div>
  )
}

export default SignIn