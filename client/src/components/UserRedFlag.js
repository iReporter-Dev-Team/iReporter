import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function UserRedFlag({ id, headline, location, status, filteredRedFlags, setRedFlags }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errors, setErrors] = useState([]);
  const [isSaving, setIsSaving] = useState(false)
  const [userRedFlag, setUserRedFlag] = useState({
    id: 0,
    headline: "",
    location: "",
    image: "",
    video: "",
    description: "",
    status: "",
    user: {
      id: 0,
      name: "",
      email: "",
      phone_number: "",
      is_admin: false
    }
  })

  useEffect(() => {
    fetch(`/redflags/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setUserRedFlag(data)
      })
  },[id])

  const [updateRedFlagData, setUpdateRedFlagData] = useState({
    location: userRedFlag.location,
    description: userRedFlag.description
  })

  useEffect(() => {
    setUpdateRedFlagData({
      location: userRedFlag.location,
      description: userRedFlag.description
    })
  }, [])

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setUpdateRedFlagData({[name]: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSaving(true)
    fetch(`/redflags/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateRedFlagData)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          const updatedUserRedFlags = filteredRedFlags?.map((updatedUserRedFlag) => {
            if (updatedUserRedFlag.id === data.id) {
              return data
            } else {
              return updatedUserRedFlag
            }
          })
          handleClose()
          setRedFlags(updatedUserRedFlags)
          setIsSaving(false)
        })
      } else {
        setIsSaving(false)
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

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
        <td>{headline}</td>
        <td>{location}</td>
        <td>{status}</td>
        <td><div style={{ display: "flex"}}><Link style={{flexGrow: "0.25"}} onClick={handleShow}><Button variant="info">Edit</Button></Link><Button variant="danger" onClick={handleDeleteUserRedFlag}>Delete</Button></div></td>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your red flag report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Red Flag Location"
                  autoFocus
                  name="location"
                  value={updateRedFlagData.location}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Red Flag description"
                name="description"
                value={updateRedFlagData.description}
                onChange={handleChange}
                />
              </Form.Group>
              <div>
              {errors.map((err) => {
                <p key={err} style={{ color: "red"}}>{err}</p>
              })}
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={handleSubmit}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Modal>
    </tr>
    </>
  )
}

export default UserRedFlag