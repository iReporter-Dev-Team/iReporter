import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";
// import UsersList from "../UsersList";

function Profile({ user }) {
  // const []
  const [redflags, setRedflags] = useState([]);
  const [interventions, setInterventions] = useState([]);

  // fetch redflags response
  useEffect(() => {
    fetch("/redflags")
      .then((r) => r.json())
      .then((data) => setRedflags(data));
  }, []);

  const filteredRedflags = redflags.filter((flag) => flag.user_id == user.id);

  // fetch interventions responses
  useEffect(() => {
    fetch("/interventions")
      .then((r) => r.json())
      .then((data) => setInterventions(data));
  }, []);

  const filteredInterventions = interventions.filter((intervention) => intervention.user_id == user.id);

  // display specific data to user
  // function showRedflag(){
  //   if
  // }

  // HandleRedflagDelete
  const handleredflagDelete = (id) => {
    setRedflags(redflags.filter((user) => user.id !== id));
  };

  // Handle Redflag Update
  const handleRedflagUpdate = (updatedRedflag) => {
    const handleRedflagUpdates = redflags.map((redflag) => {
      return redflag.id === updatedRedflag.id ? updatedRedflag : redflag;
    });
    setRedflags(handleRedflagUpdates)
  };

  // HandleInterventionDelete
  const handleInterventionDelete = (id) => {
    setInterventions(interventions.filter((user) => user.id !== id));
  };

  // Handle Intervention Update
  const handleInterventionUpdate = (updatedIntervention) => {
    const handleInterventionUpdates = interventions.map((intervention) => {
      return intervention.id === updatedIntervention.id
        ? updatedIntervention
        : intervention;
    });
    setInterventions(handleInterventionUpdates)
  };

  return (
    <>
      <NavBar />

      {/* Cards */}
      <div>
        {filteredRedflags.map((redflag) => (
          <div key={redflag}>
            <h2>{redflag.status}</h2>
            <p>{redflag.description}</p>
            <button onClick={handleRedflagUpdate}>Update</button>
            <button onClick={handleredflagDelete}>Delete</button>
          </div>
        ))}
      </div>

      <div>
        {filteredInterventions.map((intervention) => (
          <div key={intervention}>
            <h2>{intervention.status}</h2>
            <p>{intervention.description}</p>
            <button onClick={handleInterventionUpdate}>Update</button>
            <button onClick={handleInterventionDelete}>Delete</button>
          </div>
        ))}
      </div>

      {/* <UsersList /> */}

      <Footer />
    </>
  );
}
export default Profile;
