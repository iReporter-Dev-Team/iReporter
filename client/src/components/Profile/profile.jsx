import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar/navbar";

function Profile(){

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // fetch data
    // const 

    return(
    <>
    <NavBar />
    <form onSubmit={handleSubmit}>
        <label>
            Please provide us with more information;
            <input type='text' name='Location' required/>
            <input type='text' name='Email Address' required/>
            <input type='integer' name='Phone Number' required/>
        </label>
        <input type='submit' value='Submit' />
    </form>


    <Card>
        <h2>{title}</h2>
        <p>{description}</p>
    </Card>

    <Footer />
    </>
    )
}

export default Profile
