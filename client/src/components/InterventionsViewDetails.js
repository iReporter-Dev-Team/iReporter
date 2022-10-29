import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import a from "./videos/a.mp4"
import e from "./images/e.jpg"


export default function InterventionsViewDetails({}){

     const [status, setStatus] = useState("")
    // const [date, setDate] = useState("")
    // const [title, setTitle] = useState("")
    // const [video, setvideo] = useState("")
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
            //    setVideo(interventions.video)
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
                <img src={image} style={{height: 500 + 'px', width: 600 + 'px',float:"right"}} />
                { <Video autoPLay loop
                poster={e}
                onCanPlayThrough={()=>{

                }} style={{height: 500 + 'px', width: 600 + 'px',float:"left"}}>
                <source src={a} type="video/webm"/>
                </Video> }
                <h4>{location}</h4>
                <p>{description}</p>
                <h5>{status}</h5>
            </center> 
            </div> 
        </div>
    )

}