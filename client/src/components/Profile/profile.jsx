import React, { useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar/navbar";

function Profile() {
  const [location, setLocation] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch response
    fetch("/raiseissue", {
      method: "POST",
      headers: {
        "Content-Type": "application",
      },
      body: JSON.stringify({ location, mail, phone }),
    }).then((r) => {
      r.json;
    });
  };

  return (
    <>
      <NavBar />

      <form onSubmit={handleSubmit}>
        <FormField>
          Please provide us with more information;
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            autoComplete="off"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="mail">Email Address</label>
          <input
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="integer"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormField>

        <button type="submit" value="Submit" />
      </form>

      <div>
        {errors.map((err) => (
          <Card key={err}>
            <h2>{title}</h2>
            <p>{description}</p>
          </Card>
        ))}
      </div>


      <Footer />
    </>
  );
}

export default Profile;
