import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function DashBoardViewDetails({}){

    // const [status, setStatus] = useState("")
    // const [date, setDate] = useState("")
    // const [title, setTitle] = useState("")
    //const [video, setvideo] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")

    let {interventionId} = useParams()
  
    console.log(interventionId)

    const VIEW_INTERVENTIONS = () => {
        fetch(`http://localhost:3000/interventions/${interventionId}`)
         .then((response) => response.json())
            .then((interventions) => {
              

               setImage(interventions.image)
               setLocation(interventions.location)
                setDescription(interventions.description)
                
            })
    }

    useEffect(
        VIEW_INTERVENTIONS, []
    )
    
 return(
        <div className="container">
            <center>
                <img src={image} style={{height: 200 + 'px', width: 300 + 'px'}} />
                <h4>{location}</h4>
                <p>{description}</p>
            </center>  
        </div>
    )

}