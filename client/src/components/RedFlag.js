import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function RedFlag({
  id,
  name,
  location,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [redFlags, setRedFlags] = useState([]);
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetch(`/redflags/${id}`)
    .then((r) => r.json())
    .then((data) => setStatus(data.status))
  },[])

  useEffect(() => {
    fetch('/redflags')
    .then((r) => r.json())
    .then((data) => setRedFlags(data))
  }, [])

  const handleDeleteRedFlag = () => {
    fetch(`/redflags/${id}`,{
        method: 'DELETE',
    }) .then((response) => response.json())
    .then(() => {
      setRedFlags( redFlags.filter((redFlag) => redFlag.id !== id))  
    })
  } 

  const handleSelect = (e) => {
    setStatus(e)
    fetch(`redflags/${id}`, {
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
        const updatedRedFlagRecords = {...redFlags, ...data}
        setRedFlags(updatedRedFlagRecords)
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
            <Link style={{ flexGrow: "0.25" }} to={`/redflags/${id}`}>
              <Button variant="info">View</Button>
            </Link>
            <Button onClick={handleDeleteRedFlag} variant="danger">
              {isDeleting ? "Deleting" : "Delete"}
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default RedFlag;
