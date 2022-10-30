import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
import 'react-html5video/dist/styles.css';
import { DefaultPlayer as Video } from 'react-html5video';

import a from "./videos/a.mp4"
import e from "./images/e.jpg"

export default function RedFlagsViewDetails({}){

     const [status, setStatus] = useState("")
    // const [date, setDate] = useState("")
    // const [title, setTitle] = useState("")
    // const [video, setvideo] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    

   //Display redflag
    let {redflagId} = useParams()
  
    console.log(redflagId)

    const VIEW_REDFLAG = () => {
        fetch(`/redflags/${redflagId}`)
         .then((response) => response.json())
            .then((redflags) => {
              console.log(redflags)

               setImage(redflags.image)
            //    setVideo(redflags.video)
               setLocation(redflags.location)
                setDescription(redflags.description)
                setStatus(redflags.status)
                
            })
    }

    useEffect(
        VIEW_REDFLAG, []
    )
 return(
        <div className="View ">
            <div className="clearfix">
            <AdminNavbar/>
      <header style={{ display: "flex", marginTop: "150px", marginBottom: "10px"}}></header>
            <center>
                <img src={image} style={{height: 500 + 'px', width: 600 + 'px',float:"left"}} />
                { <Video autoPLay loop
                poster={e}
                onCanPlayThrough={()=>{

                }} style={{height: 500 + 'px', width: 600 + 'px',float:"right"}}>
                <source src={a} type="video/webm"/>
                </Video> }
               <h4>{location}</h4>
                <p style={{textAlign:"center"}}>{description}</p>
                <h5>{status}</h5>
            </center> 
            </div> 
        </div>
    )

}