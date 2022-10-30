import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from "react-router-dom";

function UserIntervention({ id, location, status, filteredInterventions, setInterventions }) {
  const handleDeleteUserIntervention = () => {
    fetch(`/interventions/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      const revisedUserInterventions = filteredInterventions.filter((specificIntervention) => {
        return specificIntervention.id !== id
      })
      setInterventions(revisedUserInterventions)
    })
  }

  return (
    <>
    <tr>
        <td>{id}</td>
        <td>{location}</td>
        <td>{status}</td>
        <td><div style={{ display: "flex"}}><Link style={{flexGrow: "0.25"}} to={`/edit-intervention/${id}`}><Button variant="info">Edit</Button></Link><Button variant="danger" onClick={handleDeleteUserIntervention}>Delete</Button></div></td>
    </tr>
    </>
  )
}

export default UserIntervention