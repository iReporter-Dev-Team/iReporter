import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { BsEmojiFrown } from "react-icons/bs";

function NotFound() {
  return (
    <div className='not-found'>
        <div className="spacer"></div>
        <BsEmojiFrown size="10em" style={{ marginBottom: "30px"}}/>
        <h1 style={{ marginBottom: "30px"}}>Page Not Found</h1>
        <p style={{ marginBottom: "30px"}}>Sorry, we can't find that page. You'll find loads to explore on the home page.</p>
        <Link style={{ marginBottom: "30px"}} to="/"><Button variant="danger">iReporter Home</Button></Link>
    </div>
  )
}

export default NotFound