import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
import PropTypes from "prop-types";
// import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

// import a from "./videos/a.mp4"
// import e from "./images/e.jpg"


export default function InterventionsViewDetails(){

     const [status, setStatus] = useState("")
    // const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
     const [video, setVideo] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    
//Display Intervention
    let {interventionId} = useParams()
  
    console.log(interventionId)

    const VIEW_INTERVENTION = () => {
        fetch(`/interventions/${interventionId}`)
         .then((response) => response.json())
            .then((interventions) => {
              console.log(interventions)

               setImage(interventions.image)
              setVideo(interventions.video)
              setTitle(interventions.title)
               setLocation(interventions.location)
                setDescription(interventions.description)
                setStatus(interventions.status)
                
            })
    }

    useEffect(
        VIEW_INTERVENTION, []
    )

   
 return(
        <div className="View">
             <div className="clearfix">
            <AdminNavbar/>
      <header style={{ display: "flex", marginTop: "150px", marginBottom: "10px"}}></header>
            <center>
                <img src={image} style={{height: 350 + 'px', width: 450 + 'px',float:"right"}} />
                <iframe
      width="450"
      height="350"
      align="left"
      src={`https://www.youtube.com/embed/${video}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
                {/* { <Video autoPLay loop
                poster={e}
                onCanPlayThrough={()=>{

                }} style={{height: 500 + 'px', width: 600 + 'px',float:"left"}}>
                <source src={a} type="video/webm"/>
                </Video> } */}
                 <h4 style={{color:"red"}}>{title}</h4>
                <h4>{location}</h4>
                <p style={{textAlign:"center"}}>{description}</p>
                <h5>{status}</h5>
            </center> 
            </div> 
        </div>
    )
    

}
InterventionsViewDetails.propTypes = {
    video: PropTypes.string.isRequired
  };