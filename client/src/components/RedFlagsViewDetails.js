import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import PropTypes from "prop-types";
import "react-html5video/dist/styles.css";
// import { DefaultPlayer as Video } from 'react-html5video';

// import a from "./videos/a.mp4"
// import e from "./images/e.jpg"

export default function RedFlagsViewDetails({}) {
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

        setImage(redflags.image);
        setVideo(redflags.video);
        setTitle(redflags.headline);
        setLocation(redflags.location);
        setDescription(redflags.description);
        setStatus(redflags.status);
      });
  };

  useEffect(VIEW_REDFLAG, []);
  return (
    <div className="View ">
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
        <div>
          <img
            src={image}
            style={{ height: 350 + "px", width: 500 + "px", float: "left" }}
          />
          <iframe
            width="500"
            height="350"
            align="right"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        {/* { <Video autoPLay loop
                poster={e}
                onCanPlayThrough={()=>{

                }} style={{height: 500 + 'px', width: 600 + 'px',float:"right"}}>
                <source src={a} type="video/webm"/>
                </Video> } */}
      </div>
      <section className="curve"></section>
      <h5 style={{ textAlign:"center", color:"red", padding: "4%"}}>{status}</h5>
    </div>
  );
}
RedFlagsViewDetails.propTypes = {
  video: PropTypes.string.isRequired,
};
