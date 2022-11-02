import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Intervention({
  id,
  name,
  location,
  interventions,
  setInterventions,
  status,
}) {

  const [recordStatus, setRecordStatus] = useState(status);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteIntervention = () => {
    console.log(interventions)
    fetch(`/interventions/${id}`, {
      method: "DELETE",
    })
     
      .then(() => {
        setInterventions( interventions=> interventions.filter((item) => item.id !== id));
      });
  };
  // ############################ Email Notification Implementiation ######################################################

  const sendEmail = () => {
    const templateParams = {
      name: `/interventions/${id}.name`,
      email: `/interventions/${id}.email`,
      message: "Your intervention record status has been updated!",
    };

    // dummy params => emailjs restricts to 200 free emails a month
    emailjs.send("gmail", "feedback", templateParams, "gydg76y3g7u3ygf").then(
      (response) => {
        console.log(
          "SUCCESS! Email has been sent to you!",
          response.status,
          response.text
        );
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  // ############################ Email Notification Implementiation ######################################################

  const handleSelect = (eventKey) => { 
  
    setIsUpdating(true);
    fetch(`/interventions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: eventKey,
      }),
    }).then((r) => {
     
      if (r.ok) {
        r.json().then(() => {
          setIsUpdating(false);
          console.log(status);
          setRecordStatus(eventKey);
        });
      } else {
        setIsUpdating(true);
        r.json().then(console.log("Error in updating the status"));
      }
    });
    sendEmail();
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location}</td>
        <td>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {isUpdating ? "Updating the status..." : recordStatus}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Under Investigation">
                Under Investigation
              </Dropdown.Item>
              <Dropdown.Item eventKey="Rejected">Rejected</Dropdown.Item>
              <Dropdown.Item eventKey="Resolved">Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
        <td>
          <div style={{ display: "flex" }}>
            <Link style={{ flexGrow: "0.25" }} to={`/interventions/${id}`}>
              <Button variant="info">View</Button>
            </Link>
            <Button onClick={handleDeleteIntervention} variant="danger">
              Delete
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Intervention;