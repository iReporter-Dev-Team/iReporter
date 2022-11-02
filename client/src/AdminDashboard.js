import React, { useEffect, useState } from "react";
import RedFlag from "./components/RedFlag";
import Table from "react-bootstrap/Table";
import Intervention from "./components/Intervention";
import AdminNavbar from "./components/AdminNavbar";
import { RiAlertFill } from "react-icons/ri";
import { FcSupport } from "react-icons/fc";

function AdminDashboard({ user ,interventions, setInterventions, redFlags, setRedFlags }) {
  const [recordToggle, setRecordToggle] = useState(false)

  useEffect(() => {
    fetch("/redflags")
      .then((r) => r.json())
      .then((data) => setRedFlags(data));
  }, []);

  useEffect(() => {
    fetch("/interventions")
      .then((r) => r.json())
      .then((data) => setInterventions(data));
  }, []);

  const redFlagList = redFlags.map((redFlag) => {
  return <RedFlag 
    redFlags={redFlags}
    setRedFlags={setRedFlags}
    key={redFlag.id}
    id={redFlag.id}
    name={redFlag?.user?.name}
    location={redFlag.address}
    image={redFlag.image}
    video={redFlag.video}
    status={redFlag.status}
  
  />
  })

  const interventionList = interventions.map((intervention) => {
    return <Intervention 
      interventions={interventions}
      setInterventions={setInterventions}
      key={intervention.id}
      id={intervention.id}
      name={intervention?.user?.name}
      location={intervention.address}
      image={intervention.image}
      video={intervention.video}
      status={intervention.status}
    />
    })
    
  return (
    <div>
      <AdminNavbar />
      <header
        style={{ display: "flex", marginTop: "10px", marginBottom: "10px" }}
      >
        <h1 style={{ marginTop: "60px", flexGrow: "0.9" }}>
          Welcome {user?.name}
        </h1>
        {recordToggle ? ( 
          <>
            <h4 style={{ marginTop: "70px", marginRight: "10px" }}>
              Red Flags
            </h4>
            <RiAlertFill
              className="dashboard-toggle"
              size="2.5rem"
              style={{ color: "#c60021" }}
              onClick={() => setRecordToggle(!recordToggle)}
            />
          </>
        ) : (
          <>
            <h4 style={{ marginTop: "70px", marginRight: "10px" }}>
              Interventions
            </h4>
            <FcSupport
              className="dashboard-toggle"
              size="2.5rem"
              onClick={() => setRecordToggle(!recordToggle)}
            />
          </>
        )}
      </header>
      {recordToggle ? (
<<<<<<< HEAD
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Red Flags</th>
              <th>Name of Reporter</th>
              <th>Location</th>
              <th>Status</th>
              <th>Record actions</th>
              {/* <th>Image of incident</th>
          <th>Video of incident</th> */}
            </tr>
          </thead>
          <tbody>{redFlagList}</tbody>
        </Table>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Interventions</th>
              <th>Name of Reporter</th>
              <th>Location</th>
              <th>Status</th>
              <th>Record actions</th>
              {/* <th>Image of incident</th>
          <th>Video of incident</th> */}
            </tr>
          </thead>
          <tbody>{interventionList}</tbody>
        </Table>
=======
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Red Flags</th>
          <th>Name of Reporter</th>
          <th>Location</th>
          <th>Status</th>
          <th>Record actions</th>
        </tr>
      </thead>
      <tbody>
        {redFlagList}
      </tbody>
    </Table>
      )
      :
      (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Interventions</th>
          <th>Name of Reporter</th>
          <th>Location</th>
          <th>Status</th>
          <th>Record actions</th>
        </tr>
      </thead>
      <tbody>
        {interventionList}
      </tbody>
    </Table>
>>>>>>> 65fd1faf4f7e9230de0ba8ea964bcce9462c59d0
      )}
    </div>
  );
}

export default AdminDashboard;
