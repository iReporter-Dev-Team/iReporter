import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Map from "./Map";

const AboutUs = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [interventions, setInterventions] = useState([]);
  useEffect(() => {
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  // const reviews = [
  //   {
  //     name: "Jonathan D.",
  //     citation: "Sale Closed in 2019",
  //     quote:
  //       "Door.com has been great. I feel like I got to work with a specialist at each point in the process. Everyone was very professional and very helpful. Plus, I'm amazed at the flat-fee for the sale! Great way to save at closing. Door.com has been great. I feel like I got to work with a specialist at each point in the process. Everyone was very professional and very helpful. Plus, I'm amazed at the flat-fee for the sale! Great way to save at closing.",
  //   },
  //   {
  //     name: "Peter C.",
  //     citation: "Sale Closed in 2019",
  //     quote:
  //       "I have bought and sold ten homes. This has been the most rewarding experience of them all. True professionalism and insight as well as great customer service makes me a believer in the Door.com business model.",
  //   },
  //   {
  //     name: "Paulette H.",
  //     citation: "Sale Closed in 2019",
  //     quote:
  //       "The entire experience from onboarding to the sale of our home has been professional, expedited quickly, and I saved close to $14,000 in commissions. I will absolutely be using Door.com for the sale of my next property.",
  //   },
  //   {
  //     name: "Ryan W.",
  //     citation: "Sale Closed in 2019",
  //     quote:
  //       "Service was excellent EVERY step of the process! No way to tell that Door.com provided a flat rate service by the way that they treated us and handled every step of the transactions.",
  //   },
  //   {
  //     name: "Kevin R.",
  //     citation: "Sale Closed in 2019",
  //     quote:
  //       "Everyone we worked with was very responsive, professional and easy to work with. A great experience all around. I work in this industry too so my expectations are high. Great work by all.",
  //   },
  // ];
  // const reviews = () => {
  //       fetch("/interventions")
  //         .then((response) => response.json())
  //         .then((interventions) => {
  //       console.log(interventions)
  //           setInterventions(interventions);
  //         });
  //     };

  //     useEffect(reviews, []);
  useEffect(() => {
    fetch("/interventions")
      .then((res) => res.json())
      .then(setInterventions);
    console.log(interventions);
  }, []);

  return (
    <div className="welcome" >
      <div className="row">
        <section className="float-container">
          <div className="float-child1 col">
            <h1>
              <span style={{ fontweight: "bold", color: "#5a7670" }}>
                Welcome To &nbsp;
              </span>
              <span style={{ fontweight: "bold", color: "white" }}>iReporter</span>
            </h1>
            <p>A Platform where you can report any form of corruption or
            Intervention incidences.</p>
          </div>
          <div className="float-child col">
            <Map />
          </div>
        </section>
        <section  className="about">
          <h1 style={{ fontweight: "bold",  textAlign: 'center',color: "#fa7670" }}>About Us &nbsp;</h1>
          <p style={{ padding:"30px" }}>
            Corruption is a huge bane to Africa’s development. African countries
            must develop novel and localised solutions that will curb this
            menace, hence the birth of iReporter. iReporter enables any/every
            citizen to bring any form of corruption to the notice of appropriate
            authorities and the general public. Users can also report on things
            that needs government intervention
          </p>
        </section>
        <h2 style={{ fontweight: "bold",  textAlign: 'center',color: "#fa7670"}}>Client's Stories</h2>
        <div className="App " >
          <ul className="carousel__list"style={{ backgroundColor:"white"}}>
            {interventions.map((intervention, index) => {
              const { description, location } = intervention;
              const count = index + 1;

              return (
                <li
                  className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                  key={count}
                >
                  <blockquote className="carousel__quote">
                    <cite>
                      {/* <span className="carousel__name">{name}</span> */}
                      <span className="carousel__citation">{location}</span>
                    </cite>
                    <p>
                      "{description.substring(0, 400)}"{" "}
                      <Link to="/login" style={{ fontweight: "bold" }}>
                        ...Read more
                      </Link>
                    </p>
                  </blockquote>
                </li>
              );
            })}
            <li className="carousel__indicator">
              <span
                className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
              />
            </li>
          </ul>
          <Link to="/get-started">
            <MDBBtn outline rounded className="mx-2" color="dark">
              Share Your Story
            </MDBBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
