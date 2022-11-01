import React, { useState, useEffect } from "react";
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
  const [recordStatus, setRecordStatus] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDeleteIntervention() {
    setIsDeleting(true);
    fetch(`/interventions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        res.json().then(() => {
          const revisedInterventions = interventions.filter((intervention) => {
            return intervention.id !== id;
          });
          setIsDeleting(false);
          setInterventions(revisedInterventions);
        });
      } else {
        setIsDeleting(false);
        res.json().then((err) => err.errors);
      }
    });
  }
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

  const handleSelect = (e) => {
    setRecordStatus(e);
    setIsUpdating(true);
    fetch(`/interventions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: recordStatus,
      }),
    }).then((r) => {
      console.log(recordStatus);
      if (r.ok) {
        r.json().then(() => {
          setIsUpdating(false);
          console.log(status);
          setRecordStatus(e);
        });
      } else {
        setIsUpdating(false);
        r.json().then(console.log("Error in updating the status"));
      }
    });
    sendEmail();
  };

  useEffect(() => {
    fetch(`/interventions/${id}`)
      .then((res) => res.json())
      .then((status) => {
        setRecordStatus(status);
      });
  }, [id]);

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location}</td>
        <td>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {isUpdating ? "Updating the status..." : status}
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
              {isDeleting ? "Deleting" : "Delete"}
            </Button>
          </div>
        </td>
        {/* <td>{image}</td>
        <td>{video}</td> */}
      </tr>
    </>
  );
}

export default Intervention;
