import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function RedFlag({ id, name, location, image, video, status, redFlags, setRedFlags }) {
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
  return (
    <>
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location}</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {status}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Under Investigation</Dropdown.Item>
              <Dropdown.Item>Rejected</Dropdown.Item>
              <Dropdown.Item>Resolved</Dropdown.Item>
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