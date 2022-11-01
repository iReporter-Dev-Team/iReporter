import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UserRedFlag from './UserRedFlag';
import UserIntervention from "./UserIntervention";
import Table from 'react-bootstrap/esm/Table';

function Profile({ user }) {
    const [redFlags, setRedFlags] = useState([]);
    const [interventions, setInterventions] = useState([]);
    const [reportToggle, setReportToggle] = useState(false);

    useEffect(() => {
        fetch("/redflags")
        .then((r) => r.json())
        .then((data) => setRedFlags(data));
    }, []);
    
    const filteredRedFlags = redFlags?.filter((flag) => flag?.user?.id === user?.id);
    const redFlagNumber = filteredRedFlags?.length
    const userRedFlagList = filteredRedFlags?.map((userRedFlag) => {
      return <UserRedFlag
      key={userRedFlag.id}
      id={userRedFlag.id}
      headline={userRedFlag.headline}
      location={userRedFlag.address}
      status={userRedFlag.status}
      filteredRedFlags={filteredRedFlags}
      setRedFlags={setRedFlags}
      />
    })

    useEffect(() => {
        fetch("/interventions")
        .then((r) => r.json())
        .then((data) => setInterventions(data));
    }, []);

    const filteredInterventions = interventions?.filter((intervention) => intervention?.user?.id === user?.id)
    const interventionNumber = filteredInterventions.length
    const userInterventionList = filteredInterventions.map((userIntervention) => {
      return <UserIntervention
      key={userIntervention.id}
      id={userIntervention.id}
      headline={userIntervention.headline}
      location={userIntervention.address}
      status={userIntervention.status}
      filteredInterventions={filteredInterventions}
      setInterventions={setInterventions}
      />
    })

  return (
    <div>
        <Navbar/>
        <Card style={{ width: '30rem', marginLeft: "auto", marginRight: "auto", marginTop: "60px" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "center"}}>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center"}}>{user.email}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center"}}>{user.phone_number}</Card.Subtitle>
        <Card.Text style={{ textAlign: "center"}}>
            You have {redFlagNumber} red flag reports.
        </Card.Text>
        <Card.Text style={{ textAlign: "center"}}>
            You have reported {interventionNumber} interventions.
        </Card.Text>
        <div style={{ display: "flex", flexDirection: "row"}}>
        <Button variant="danger" onClick={() => setReportToggle(true)}>View Red Flags</Button>
        <div className="btn-spacer"></div>
        <Button variant="primary" style={{ alignSelf: "flex-end"}} onClick={() => setReportToggle(false)}>View Interventions</Button>
        </div>
      </Card.Body>
    </Card>
    {reportToggle ? (
    <Table striped bordered hover style={{ marginTop: "20px"}}>
      <thead>
        <tr>
          <th>Red Flags</th>
          <th>Location</th>
          <th>Status</th>
          <th>Record actions</th>
        </tr>
      </thead>
      <tbody>
        {userRedFlagList}
      </tbody>
    </Table>
    )
    : 
    (
      <Table striped bordered hover style={{ marginTop: "20px"}}>
      <thead>
        <tr>
          <th>Interventions</th>
          <th>Location</th>
          <th>Status</th>
          <th>Record actions</th>
        </tr>
      </thead>
      <tbody>
        {userInterventionList}
      </tbody>
    </Table>
    )}
    </div>
  )
}

export default Profile