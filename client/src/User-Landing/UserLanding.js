import React, {useState} from 'react'

export default function UserLanding() {

  const[location, setLocation] =useState("")
  const[image, setImage] =useState("")
  const[video, setVideo] =useState("")
  const[description, setDescription] =useState("")
  // redflag 
  const[categoryBtn, setCategoryBtn] =useState("redflag")
  const[displayy, setDisplayy] =useState("none")


  
  function handleSubmitRedflag(e) {
    e.preventDefault()
    const formData= {
      location,
      image,
      video,
      description,
      status: "under investigation",
      user_id: 1
    }
    console.log("Red Flag")
    console.log(formData)

    setDisplayy("none")

  }

  function handleSubmitIntervention(e) {
    e.preventDefault()
    const formData= {
      location,
      image,
      video,
      description,
      status: "under investigation",
      user_id: 1
    }
    console.log("Intervention")
    console.log(formData)

    setDisplayy("none")
  }


  return (
    <>
      <h2>UserLanding</h2>

      <div style={{ width: 200, padding: 20 }}>
        <div>
          <h3 >Redflag</h3>
          <p >Lorem ipsum 1dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button onClick={()=>{
            setCategoryBtn("redflag") 
            setDisplayy("block")}}>Report redflag</button>
        </div>
      </div>

      <div style={{ width: 200, padding: 20 }}>
        <div>
          <h3 >Intervention</h3>
          <p >Lorem ipsum 1dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button onClick={()=>{
            setCategoryBtn("intervention") 
            setDisplayy("block")}}>Report Intervention</button>
        </div>

      </div>

      <div style={{ padding: 20 , display:displayy}}>
      <form onSubmit={(e)=>categoryBtn ==="redflag"?handleSubmitRedflag(e):handleSubmitIntervention(e)}>
        <div>
          <h2>{categoryBtn==="redflag"?"Post new redflag":"Post new intervention"}</h2>
        </div>

        <div>
        <label htmlFor="Location" className="form-label">
          location
        </label>
        <input
          type="text"
          className="form-control"
          value={location}
          placeholder="location here..."
          onChange={(e)=>setLocation(e.target.value)} 
        />

        </div>

        <div>
        <label htmlFor="Location" className="form-label">
        image
        </label>
        <input
          type="text"
          className="form-control"
          value={image}
          placeholder="image here..."
          onChange={(e)=>setImage(e.target.value)} 

        />
        </div>

        <div>
        <label htmlFor="Location" className="form-label">
        video
        </label>
        <input
          type="text"
          className="form-control"
          value={video}
          placeholder="video here..."
          onChange={(e)=>setVideo(e.target.value)} 

        />
        </div>

        <div>
        <label htmlFor="Location" className="form-label">
        description
        </label>
        <input
          type="text"
          className="form-control"
          value={description}
          placeholder="description here..."
          onChange={(e)=>setDescription(e.target.value)} 

        />
        </div>

        <input type={'submit'} value={categoryBtn==="redflag"?"Submit redflag":"Submit intervention"} />

      </form>
      </div>
    </>

  )
}
