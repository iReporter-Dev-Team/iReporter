import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Map from "./Map";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsPenFill } from "react-icons/bs"
import { BsCameraReelsFill } from "react-icons/bs"
import { GiInjustice } from "react-icons/gi";

const AboutUs = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [interventions, setInterventions] = useState([]);

  /*****handles if logged in *******/

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  /*****handles if logged in *******/

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

  useEffect(() => {
    fetch("/interventions")
      .then((res) => res.json())
      .then(setInterventions);
    console.log(interventions);
  }, []);

  return (
    <div className="welcome" id="home">
      <div className="row">
        <section className="float-container">
          <div className="float-child1 col">
            <h1>
              <span style={{ fontweight: "bold", color: "#5a7670" }}>
                Welcome To &nbsp;
              </span>
              <span style={{ fontweight: "bold", color: "white" }}>
                iReporter
              </span>
            </h1>
            <p>
              A Platform where you can report any form of corruption or
              intervention incidences.
            </p>
          </div>
          <div className="float-child col">
            <Map />
          </div>
        </section>
        <section>
          <h1
          id="how-it-works"
            style={{
              fontweight: "bold",
              textAlign: "center",
              color: "#fa7670",
              marginTop: "75px",
              marginBottom: "75px"
            }}
          >
            How it works &nbsp; 
          </h1>
          <Container style={{ marginLeft: "100px"}}>
           <Row>
            <Col sm> <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center"}}><BsPenFill style={{ color: "#fa7670", marginBottom: "15px"}} size="2.85rem"/><h2 style={{ fontSize: "24px"}}>Sign up</h2></Card.Title>
                <Card.Text style={{ fontSize: "16px", textAlign: "center"}}>
                  Set up and iReporter account to access its features
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col sm>
              <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center"}}><BsCameraReelsFill style={{ color: "#fa7670", marginBottom: "15px"}} size="2.85rem"/><h2 style={{ fontSize: "24px"}}>Record your report</h2></Card.Title>
                <Card.Text style={{ fontSize: "16px", textAlign: "center"}}>
                  Capture the incident in real time and upload it to the app.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col sm>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center"}}><GiInjustice style={{ color: "#fa7670", marginBottom: "15px"}} size="2.85rem"/><h2 style={{ fontSize: "24px"}}>Wait for the investigation</h2></Card.Title>
                <Card.Text style={{ fontSize: "16px", textAlign: "center"}}>
                 We'll update you with a notification once your report has been reviewed.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
        </section>
        <section className="about">
          <h1
            style={{
              fontweight: "bold",
              textAlign: "center",
              color: "#fa7670",
              marginTop: "75px"
            }}
          >
            About Us &nbsp;
          </h1>
          <p style={{ padding: "30px", textAlign: "center" }}>
            Corruption is a huge bane in Africa’s development. African countries
            must develop novel and localised solutions that will curb this
            menace, hence the birth of iReporter. iReporter enables any/every
            citizen to bring any form of corruption to the notice of appropriate
            authorities and the general public. Users can also report on things
            that needs government intervention.
          </p>
        </section>
        <h2
          id="recent-reports"
          style={{ fontweight: "bold", textAlign: "center", color: "#fa7670" }}
        >
          Recent Reports
        </h2>
        <div className="App ">
          <ul className="carousel__list" style={{ backgroundColor: "white" }}>
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
                      <span className="carousel__citation">
                        Brief Report from {location}
                      </span>
                    </cite>
                    <p>
                      "{description.substring(0, 400)}"{" "}
                      {user ? (
                        <Link
                          to="/profile"
                          style={{ fontweight: "bold", textDecoration: "none", color: "#fa7670" }}
                        >
                          ...Read more
                        </Link>
                      ) : (
                        <Link
                          to="/get-started"
                          style={{ fontweight: "bold", textDecoration: "none", color: "#fa7670" }}
                        >
                          ...Read more
                        </Link>
                      )}
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
          {user ? (
            <Link to="/user-landing" style={{ marginLeft: "20px"}}>
              <MDBBtn outline rounded className="mx-2" color="light">
                Share Your Story
              </MDBBtn>
            </Link>
          ) : (
            <Link to="/get-started" style={{ marginLeft: "20px"}}>
              <MDBBtn outline rounded className="mx-2" color="light">
                Share Your Story
              </MDBBtn>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
