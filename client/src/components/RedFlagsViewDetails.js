import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import PropTypes from "prop-types";
import "react-html5video/dist/styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
// import { DefaultPlayer as Video } from 'react-html5video';

// import a from "./videos/a.mp4"
// import e from "./images/e.jpg"

export default function RedFlagsViewDetails({}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [status, setStatus] = useState("");
  // const [date, setDate] = useState("")
  const [headline, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  //Display redflag
  let { redflagId } = useParams();

  console.log(redflagId);

  const VIEW_REDFLAG = () => {
    fetch(`/redflags/${redflagId}`)
      .then((response) => response.json())
      .then((redflags) => {
        console.log(redflags);

        setImage(redflags.image_url);
        setVideo(redflags.video_url);
        setTitle(redflags.headline);
        setLocation(redflags.location);
        setDescription(redflags.description);
        setStatus(redflags.status);
      });
  };

  useEffect(VIEW_REDFLAG, []);
  return (
    <div>
      {/* <div className="clearfix"> */}
        <AdminNavbar/>
        {/* <header
          style={{ display: "flex", marginTop: "150px", marginBottom: "10px" }}
        ></header>
         <div>
          <h3 style={{  textAlign:"center"}}>{headline}</h3>
          <h5 style={{ textAlign: "center" }}>{location}</h5>
          <p>{description}</p>
       
        </div>
        <div>
          <img
            src={image}
            style={{ height: 350 + "px", width: 500 + "px", float: "left" }}
          />
          {/* <iframe
            width="500"
            height="350"
            align="right"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          /> */}
            {/* <video
              className="VideoInput_video"
              style={{height: 500 + 'px', width: 600 + 'px',float:"right"}}
              controls
              src={video}
        />
        </div> */}
        {/* { <Video autoPLay loop
                poster={e}
                onCanPlayThrough={()=>{

                }} style={{height: 500 + 'px', width: 600 + 'px',float:"right"}}>
                <source src={a} type="video/webm"/>
                </Video> } */}
      {/* </div>
      <section className="curve"></section>
      <h5 style={{ textAlign:"center", color:"red", padding: "4%"}}>{status}</h5> */} 
         <Card style={{ width: '40rem', marginLeft: "auto", marginRight: "auto", marginTop: "60px" }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>Play video</Button>
      </Card.Body>
    </Card>
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => setModalShow(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          {headline}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video
        className="VideoInput_video"
        style={{height: "40vh", width: "53vw"}}
        controls
        src={video}
        /> 
      </Modal.Body>
    </Modal>
    </div>
  );
}
RedFlagsViewDetails.propTypes = {
  video: PropTypes.string.isRequired,
};
