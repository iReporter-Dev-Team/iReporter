import React, { useState } from "react";

export default function UserLanding() {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  // redflag
  const [categoryBtn, setCategoryBtn] = useState("redflag");
  const [displayy, setDisplayy] = useState("none");

  function handleSubmitRedflag(e) {
    e.preventDefault();
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

    setDisplayy("none");
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

    setDisplayy("none");
  }

  return (
    <>
      <h2>UserLanding</h2>

      <div style={{marginTop:50}}>
        <div class="row justify-content-center">
          <div class="col-sm-5 mb-3">
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

          <div class="col-sm-5 mb-3">
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
                    type="text"
                    className="form-control"
                    value={image}
                    placeholder="image here..."
                    onChange={(e) => setImage(e.target.value)}
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
                    onChange={(e) => setVideo(e.target.value)}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
