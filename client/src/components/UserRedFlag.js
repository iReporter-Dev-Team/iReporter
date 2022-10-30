import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from "react-router-dom";

function UserRedFlag({ id, location, status, filteredRedFlags, setRedFlags }) {
  const handleDeleteUserRedFlag = () => {
    fetch(`/redflags/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      const revisedUserRedFlags = filteredRedFlags.map((specificUserRedFlag) => {
        return specificUserRedFlag.id !== id
      })
      setRedFlags(revisedUserRedFlags)
    })
  }

  return (
    <>
    <tr>
        <td>{id}</td>
        <td>{location}</td>
        <td>{status}</td>
        <td><div style={{ display: "flex"}}><Link style={{flexGrow: "0.25"}} to={`/edit-redflag/${id}`}><Button variant="info">Edit</Button></Link><Button variant="danger" onClick={handleDeleteUserRedFlag}>Delete</Button></div></td>
    </tr>
    </>
  )
}

export default UserRedFlag