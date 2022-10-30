import React, { useState, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function RedFlag({ id, name, location, image, video, redFlags, setRedFlags }) {
  const [status, setStatus] = useState("Under Investigation");
  function handleDeleteRedFlag() {
    fetch(`/redflags/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        res.json().then(() => {
          const revisedRedFlags = redFlags.filter((redFlag) => {
            return redFlag.id !== id;
          });
          setRedFlags(revisedRedFlags);
        });
      } else {
        res.json().then((err) => err.errors);
      }
    });
  }

  // ############################ Email Notification Implementiation ######################################################

  const sendEmail = () => {
    const templateParams = {
      name: `/redflags/${id}.name`,
      email: `/redflags/${id}.email`,
      message: "Your record status has been updated!",
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
    setStatus(e);
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
              {status}
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
            <Link style={{ flexGrow: "0.25" }} to={`/redflags/${id}`}>
              <Button variant="info">View</Button>
            </Link>
            <Button onClick={handleDeleteRedFlag} variant="danger">
              Delete
            </Button>
          </div>
        </td>
        {/* <td>{image}</td>
        <td>{video}</td> */}
      </tr>
    </>
  );
}

export default RedFlag;
