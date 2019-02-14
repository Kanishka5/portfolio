import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import icons1 from "../assets/images/icons-all-01-copy.png";
import icons2 from "../assets/images/icons-all-01-copy-2.png";
import icons3 from "../assets/images/icons-all-01-copy-3.png";
import icons4 from "../assets/images/icons-all-01-copy-4.png";
import icons5 from "../assets/images/icons-all-01-copy-5.png";
import icons6 from "../assets/images/icons-all-01-copy-6.png";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

export default class Intro extends Component {
  render() {
    return (
      <div className="skills" style={coverstyle}>
        <link
          href="https://fonts.googleapis.com/css?family=Quattrocento+Sans:700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:600,700"
          rel="stylesheet"
        />
        <div style={{ position: "relative", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              top: window.innerWidth > breakpoints.tablet ? "4.7vh" : 0
            }}
          >
            <p
              style={{
                letterSpacing: 16.4,
                color: "rgba(52, 58, 64, 0.06)",
                fontFamily: "Quattrocento Sans, sans-serif",
                fontSize:
                  window.innerWidth > breakpoints.tablet ? "4.5rem" : "2rem"
              }}
            >
              SKILLSETS
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              top: window.innerWidth > breakpoints.tablet ? "7vh" : "1vh"
            }}
          >
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize:
                  window.innerWidth > breakpoints.tablet ? "2rem" : "1.7rem",
                color: "#343a40"
              }}
            >
              My Skillsets
            </p>
          </div>
        </div>
        <Container>
          <Row style={{ paddingTop: "20.8%" }}>
            <Col style={iconstyle}>
              <Image src={icons4} style={imagestyle} />{" "}
              <p style={caption}>User Research Methods</p>
            </Col>
            <Col style={iconstyle}>
              <Image src={icons2} style={imagestyle} />{" "}
              <p style={caption}>User Centred Design Process</p>
            </Col>
            <Col style={iconstyle}>
              <Image src={icons6} style={imagestyle} />{" "}
              <p style={caption}>Error Analysis</p>
            </Col>
          </Row>
          <Row>
            <Col style={iconstyle}>
              <Image src={icons3} style={imagestyle} />{" "}
              <p style={caption}>Usability Testing</p>
            </Col>
            <Col style={iconstyle}>
              <Image src={icons5} style={imagestyle} />{" "}
              <p style={caption}>Illustration & Digital Art</p>
            </Col>
            <Col style={iconstyle}>
              <Image src={icons1} style={imagestyle} />{" "}
              <p style={caption}>User Interface design</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const imagestyle = {
  height: 213,
  width: "auto"
};

const caption = {
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 600,
  fontSize: "1.125rem",
  padding: "2rem 0"
};

const coverstyle = {
  width: window.innerWidth > breakpoints.tablet ? "66%" : "90%",
  margin: window.innerWidth > breakpoints.tablet ? "0 17%" : "0 5%",
  borderRadius: 15,
  boxShadow: "3px 2px 42px 0 rgba(140, 147, 189, 0.1)",
  backgroundColor: "#ffffff",
  position: "relative",
  top: window.innerWidth > breakpoints.tablet ? "50vh" : "30vh"
};

const iconstyle = {
  textAlign: "center",
  padding: "2rem"
};
