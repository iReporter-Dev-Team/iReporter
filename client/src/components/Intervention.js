import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Intervention({
  id,
  name,
  location,
}) {
  const [interventions, setInterventions] = useState([]);
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetch(`/interventions/${id}`)
    .then((r) => r.json())
    .then((data) => setStatus(data.status))
  },[])

  useEffect(() => {
    fetch('/interventions')
    .then((r) => r.json())
    .then((data) => setInterventions(data))
  }, [])

  const handleDeleteIntervention = () => {
    console.log(interventions)
    fetch(`/interventions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setInterventions( interventions=> interventions.filter((item) => item.id !== id));
      });
  };

  const handleSelect = (e) => {
    setStatus(e)
    fetch(`interventions/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        status: (e),
      }),
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => { 
        const updatedInterventionRecords = {...interventions, ...data}
        setInterventions(updatedInterventionRecords)
      })
  }

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