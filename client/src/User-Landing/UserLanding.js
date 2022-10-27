import React, { useState } from "react";

export default function UserLanding({ user }) {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  // redflag
  const [categoryBtn, setCategoryBtn] = useState("redflag");
  const [displayy, setDisplayy] = useState("none");
  //errors
  const [errors, setErrors] = useState([]);


  function handleSubmitRedflag(e) {
    e.preventDefault();
    // if (image.size > 1024){
    // setErrors({ error: "File size cannot exceed more than 1MB" })
    // }
    const formData = {
      location,
      image,
      video,
      description,
      status: "under investigation",
      user_id: 1,
    };
    console.log("Red Flag");
    console.log(formData);

    fetch("/redflags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(data => console.log( data))
        // navigate("/blogs");
        setDisplayy("none");

      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

  }

  function handleSubmitIntervention(e) {
    e.preventDefault();
    const formData = {
      location,
      image,
      video,
      description,
      status: "under investigation",
      user_id: 1,
    };
    console.log("Intervention");
    console.log(formData);

    // fetch("/interventions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then(data => setInterventions([...interventions, data]))
    //     navigate("/blogs");
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
    setDisplayy("none");
  }

  return (
    <>

      <div style={{marginTop:20}}>
      <h2 style={{ marginTop: "60px", marginLeft:80 }}>Welcome {user?.name}</h2>

        <div class="row justify-content-center">
          <div class="col-sm-5 mb-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Redflag</h5>
                <img
                  class="card-img-top"
                  src="https://2456764.fs1.hubspotusercontent-na1.net/hub/2456764/hubfs/2102%20Blogs/red-flags-1200-627.jpg?width=680&name=red-flags-1200-627.jpg"
                  alt="Redflag"
                />
                <div class="text-center">
                  <button
                    class="btn btn-danger mt-3"
                    onClick={() => {
                      setCategoryBtn("redflag");
                      setDisplayy("block");
                    }}
                  >
                    Report redflag
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-5 mb-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Intervention</h5>
                <img
                  class="card-img-top"
                  src="https://thumbs.dreamstime.com/b/intervention-grungy-wooden-headline-maple-d-rendered-royalty-free-stock-image-can-be-used-online-website-86488320.jpg"
                  alt="Redflag"
                />
                <div class="text-center">
                  <button
                    class="btn btn-danger mt-4"
                    onClick={() => {
                      setCategoryBtn("intervention");
                      setDisplayy("block");
                      // setDisplayy("none");

                    }}
                  >
                    Report Intervention
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: displayy }}>
        <div class="d-flex justify-content-center">
          <div class="col-sm-10 ">
            <div class="shadow p-3 mb-5 bg-white rounded">

              <form
                onSubmit={(e) =>
                  categoryBtn === "redflag"
                    ? handleSubmitRedflag(e)
                    : handleSubmitIntervention(e)
                }
              >
                <div class=" text-center">
                  <h2>
                    {categoryBtn === "redflag"
                      ? "Post new redflag"
                      : "Post new intervention"}
                  </h2>
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
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="Location" className="form-label">
                    image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    // value={image}
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <div>
                  <label htmlFor="Location" className="form-label">
                    video
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="video/*"
                    // value={video}
                    // placeholder="video here..."
                    onChange={(e) => setVideo(e.target.files[0])}
                  />
                </div>

                <div>
                  <label htmlFor="Location" className="form-label">
                    description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    value={description}
                    placeholder="description here..."
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div class="text-center">
                  <input
                    class="btn btn-danger mt-3"
                    type={"submit"}
                    value={categoryBtn === "redflag" ? "Submit " : "Submit "}
                  />
                </div>
                <div>
                  {errors.map((err) => (
                    <p key={err} style={{ color: "red" }}>{err}</p>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
