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
          marginLeft: 50,
          marginRight: 50,
          marginTop: "50vh"
        }}
      >
        <Container>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <img src={project1} />{" "}
            </Col>
            <Col>
              <h2>Eco Grocer App - UX Design Process</h2>
              <p>
                This project focuses on the design of an application which is
                built to make the people of the United Kingdom aware of the
                environmental impact of their dietary consumptions and help them
                track and reduce their diet’s environmental impact.
              </p>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10%" }}>
            <Col>
              <h2>Kloh App Redesign - UI/UX Internship</h2>
              <p>
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
              <h2>Knowdata App Design - UI Internship</h2>
              <p>
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
              <h2>Kloh App Redesign - UI/UX Internship</h2>
              <p>
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
              <h2>Knowdata App Design - UI Internship</h2>
              <p>
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
              <h2>Kloh App Redesign - UI/UX Internship</h2>
              <p>
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
              <h2>Knowdata App Design - UI Internship</h2>
              <p>
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

const introtxtstyle = {
  paddingLeft: "5vw",
  paddingTop: 100,
  fontSize: 20
};
