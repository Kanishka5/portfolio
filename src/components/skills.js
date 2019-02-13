import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import icons1 from "../assets/images/icons-all-01-copy.png";
import icons2 from "../assets/images/icons-all-01-copy-2.png";
import icons3 from "../assets/images/icons-all-01-copy-3.png";
import icons4 from "../assets/images/icons-all-01-copy-4.png";
import icons5 from "../assets/images/icons-all-01-copy-5.png";
import icons6 from "../assets/images/icons-all-01-copy-6.png";

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
              SKILLSETS
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              top: "7vh"
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
  width: "66%",
  margin: "0 17%",
  borderRadius: 15,
  boxShadow: "3px 2px 42px 0 rgba(140, 147, 189, 0.1)",
  backgroundColor: "#ffffff",
  position: "relative",
  top: "50vh"
};

const iconstyle = {
  textAlign: "center",
  padding: "2rem"
};
