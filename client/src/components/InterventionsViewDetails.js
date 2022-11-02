import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import PropTypes from "prop-types";
// import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css";

// import a from "./videos/a.mp4"
// import e from "./images/e.jpg"

export default function InterventionsViewDetails() {
  const [status, setStatus] = useState("");
  // const [date, setDate] = useState("")
  const [headline, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  //Display Intervention
  let { interventionId } = useParams();

  console.log(interventionId);

  const VIEW_INTERVENTION = () => {
    fetch(`/interventions/${interventionId}`)
      .then((response) => response.json())
      .then((interventions) => {
        console.log(interventions);

        setImage(interventions.image);
        setVideo(interventions.video);
        setTitle(interventions.headline);
        setLocation(interventions.location);
        setDescription(interventions.description);
        setStatus(interventions.status);
      });
  };

  useEffect(VIEW_INTERVENTION, []);

  return (
    <div className="View">
      <div className="clearfix">
        <AdminNavbar />
        <header
          style={{ display: "flex", marginTop: "150px", marginBottom: "10px" }}
        ></header>
        <div>
          <h3 style={{  textAlign:"center"}}>{headline}</h3>
          <h5 style={{ textAlign: "center" }}>{location}</h5>
          <p>{description}</p>
       
        </div>
        <section>
          <img
            src={image}
            style={{ height: 350 + "px", width: 500 + "px", float: "right" }}
          />
          <iframe
            //  padding="55px"
            width="500"
            height="350"
            float="left"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </section>
        {/* { <Video autoPLay loop
                poster={e}
                onCanPlayThrough={()=>{

                }} style={{height: 500 + 'px', width: 600 + 'px',float:"left"}}>
                <source src={a} type="video/webm"/>
                </Video> } */}
      </div>
      <section className="curve"></section>
      <h5 style={{ textAlign:"center", color:"red", padding: "4%"}}>{status}</h5>
      
    </div>
  );
}
InterventionsViewDetails.propTypes = {
  video: PropTypes.string.isRequired,
};
