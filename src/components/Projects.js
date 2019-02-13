import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import project1 from "../assets/images/ecogrocer-cover.png";
import project2 from "../assets/images/kloh-cover.png";
import project3 from "../assets/images/knowdata-cover.png";

export default class Intro extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // marginLeft: 50,
          // marginRight: 50,
          marginTop: "60vh",
          marginBottom: "20vh"
        }}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
          rel="stylesheet"
        />
        <div style={{ position: "relative", width: "83%", left: "17%" }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "left",
              top: "4.7vh"
            }}
          >
            <p
              style={{
                letterSpacing: 16.4,
                color: "rgba(52, 58, 64, 0.06)",
                fontFamily: "Quattrocento Sans, sans-serif",
                fontSize: "4.5rem"
              }}
            >
              PROJECTS
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "left",
              top: "10vh"
            }}
          >
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "2rem",
                color: "#343a40"
              }}
            >
              My Projects
            </p>
          </div>
        </div>
        <Container style={{ marginTop: "10vh" }}>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <img src={project1} />{" "}
            </Col>
            <Col>
              <h2 style={headStyle}>
                Eco Grocer App - UX Design <br /> Process
              </h2>
              <p style={paraStyle}>
                This project focuses on the design of an application which is
                built to make the people of the United Kingdom aware of the
                environmental impact of their dietary consumptions and help them
                track and reduce their diet’s environmental impact.
              </p>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <h2 style={headStyle}>
                Kloh App Redesign - UI/UX <br /> Internship
              </h2>
              <p style={paraStyle}>
                My work with Kloh - a startup based in Bengaluru, India, who
                aims to organise events which enables people to meet offline,
                involved the redesign of their android application with the
                incorporation of 5 new functionalities. My role involved user
                research, developing wireframes, rendering visual interfaces,
                rapid prototyping, usability testing, micro-interactions, design
                evaluation.
              </p>
            </Col>
            <Col>
              <img src={project2} />{" "}
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <img src={project3} />{" "}
            </Col>
            <Col>
              <h2 style={headStyle}>
                Knowdata App Design - UI <br /> Internship
              </h2>
              <p style={paraStyle}>
                My work with Algebra Analytics - a startup based in Gurgaon,
                India, which works on providing digital learning platform for
                the high school and university students of India, was one of the
                full-project remote internships. The main project I worked on
                was the interface design of a digital learning application for
                android platform named as Knowdata. My role involved generating
                wireframes, rendering visual interfaces, rapid prototyping and
                usability testing.
              </p>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <h2 style={headStyle}>Kloh App Redesign - UI/UX Internship</h2>
              <p style={paraStyle}>
                My work with Kloh - a startup based in Bengaluru, India, who
                aims to organise events which enables people to meet offline,
                involved the redesign of their android application with the
                incorporation of 5 new functionalities. My role involved user
                research, developing wireframes, rendering visual interfaces,
                rapid prototyping, usability testing, micro-interactions, design
                evaluation.
              </p>
            </Col>
            <Col>
              <img src={project2} />{" "}
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <img src={project3} />{" "}
            </Col>
            <Col>
              <h2 style={headStyle}>Knowdata App Design - UI Internship</h2>
              <p style={paraStyle}>
                My work with Algebra Analytics - a startup based in Gurgaon,
                India, which works on providing digital learning platform for
                the high school and university students of India, was one of the
                full-project remote internships. The main project I worked on
                was the interface design of a digital learning application for
                android platform named as Knowdata. My role involved generating
                wireframes, rendering visual interfaces, rapid prototyping and
                usability testing.
              </p>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <h2 style={headStyle}>Kloh App Redesign - UI/UX Internship</h2>
              <p style={paraStyle}>
                My work with Kloh - a startup based in Bengaluru, India, who
                aims to organise events which enables people to meet offline,
                involved the redesign of their android application with the
                incorporation of 5 new functionalities. My role involved user
                research, developing wireframes, rendering visual interfaces,
                rapid prototyping, usability testing, micro-interactions, design
                evaluation.
              </p>
            </Col>
            <Col>
              <img src={project2} />{" "}
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <img src={project3} />{" "}
            </Col>
            <Col>
              <h2 style={headStyle}>Knowdata App Design - UI Internship</h2>
              <p style={paraStyle}>
                My work with Algebra Analytics - a startup based in Gurgaon,
                India, which works on providing digital learning platform for
                the high school and university students of India, was one of the
                full-project remote internships. The main project I worked on
                was the interface design of a digital learning application for
                android platform named as Knowdata. My role involved generating
                wireframes, rendering visual interfaces, rapid prototyping and
                usability testing.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const paraStyle = {
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "28px",
  maxWidth: "427px"
};

const headStyle = {
  fontFamily: "Playfair Display, serif",
  fontWeight: 700,
  fontSize: "1.75rem"
};
