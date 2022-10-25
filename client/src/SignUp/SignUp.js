import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../SignUp/SignUp.css";
// import { MdPerson } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import { MdPhone } from "react-icons/md";
// import { MdLock } from "react-icons/md";

function SignUp({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name, 
        email: email,
        phone_number: phoneNumber,
        password: password,
        password_confirmation: passwordConfirmation,
        is_admin: isAdmin
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setIsLoading(false)
          onLogin(user)
          navigate('/')
        })
      } else {
        console.log({
          name, 
          email,
          phoneNumber,
          password,
          passwordConfirmation,
          isAdmin
        })
        setIsLoading(false)
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <div className="sign-up-page">
      <div className="sign-up-holder">
      <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center"}}>iReporter</h2>
      <label>Name</label>
      {/* <div className="form-field-signup"> */}
        {/* <MdPerson style={{ color: "#c60021", borderRight: "1px solid #000"}}/> */}
        <input 
        className='sign-up-input'
        type="text" 
        placeholder='Name'
        required
        onChange={(e) => setName(e.target.value)}
        />
        {/* </div> */}
        <label>Email</label>
        {/* <div className="form-field-signup">
          <MdEmail style={{ color: "c60021", borderRight: "1px solid #000" }}/> */}
        <input 
        className='sign-up-input'
        type="email"
        placeholder='Email'
        required 
        onChange={(e) => setEmail(e.target.value)}
        />
        {/* </div> */}
        <label>Phone Number</label>
        {/* <div className="form-field-signup">
          <MdPhone style={{ color: "c60021", borderRight: "1px solid #000" }}/> */}
        <input 
        className='sign-up-input'
        type="number" 
        placeholder='Phone Number'
        required
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {/* </div> */}
        <label>Password</label>
        {/* <div className="form-field-signup"> */}
          {/* <MdLock style={{ color: "#c60021", borderRight: "1px solid #000" }}/> */}
        <input 
        className='sign-up-input'
        type="password" 
        placeholder='Password'
        required
        onChange={(e) => setPassword(e.target.value)}
        />
        {/* </div> */}
        <label>Confirm password</label>
        {/* <div className="form-field-signup">
        <MdLock style={{ color: "c60021", borderRight: "1px solid #000" }}/> */}
        <input 
        className='sign-up-input'
        type="password" 
        placeholder='Confirm Password'
        required
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        {/* </div> */}
        <input 
        type="submit" 
        value={isLoading ? "Creating your account..." : "Register"}
        />
        <div>
          {errors.map((error) => (
            <p key={error} style={{ color: "red", textAlign: "center"}}>{error}</p>
          ))}
        </div>
      </form>
      <p style={{ textAlign: "center", marginTop: "20px" }}>Already have an account?</p>
        <Link to="/login" style={{ textDecoration: "none", color: "#c60021", textAlign: "center", marginTop: "-10px"}}>Login</Link>
    </div>
    </div>
  )
}

export default SignUp