import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function RedFlag({ id, name, location, image, video, redFlags, redFlag, setRedFlags, status, description, user_id }) {
  const [recordStatus, setRecordStatus] = useState('')
  function handleDeleteRedFlag() {
    fetch(`/redflags/${id}`, {
      method: "DELETE"
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then(() => {
          const revisedRedFlags = redFlags.filter((redFlag) => {
            return redFlag.id !== id
          })
          setRedFlags(revisedRedFlags)
        })
      } else {
        res.json().then(err => err.errors)
      }
    })
  }
  
  const handleSelect = (e) => {
    fetch(`/redflags/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: recordStatus
      })})
      .then((r) => {
        if (r.ok) {
          r.json().then(setRecordStatus(e))
        } else {
          r.json().then(console.log("Why doesn't this work"))
        }
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
              <Dropdown.Item eventKey="Under Investigation">Under Investigation</Dropdown.Item>
              <Dropdown.Item eventKey="Rejected">Rejected</Dropdown.Item>
              <Dropdown.Item eventKey="Resolved">Resolved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
          <td><div style={{ display: "flex"}}><Link style={{flexGrow: "0.25"}} to={`/redflags/${id}`}><Button variant="info">View</Button></Link><Button onClick={handleDeleteRedFlag}variant="danger">Delete</Button></div></td>
        {/* <td>{image}</td>
        <td>{video}</td> */}
    </tr>
    </>
  )
}

export default RedFlag;