import React from 'react'
import { TbHandStop } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NotAuthorized() {
  return (
    <div className='not-authorized'>
        <div className="spacer"></div>
        <TbHandStop size="10em" style={{ marginBottom: "30px"}}/>
        <h1 style={{ marginBottom: "30px"}}>Hold up</h1>
        <p style={{ marginBottom: "30px"}}>We're sorry, you're not authorized to access this page.</p>
        <Link to="/login" style={{ marginBottom: "30px"}}><Button>Login</Button></Link>
    </div>
  )
}

export default NotAuthorized