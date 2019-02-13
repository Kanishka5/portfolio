import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        <Container>
          <Row style={{ paddingTop:'20.8%'}}>
            <Col style={ iconstyle }>
              <img src={icons1} />{" "}
              <p>User Research Methods</p>
            </Col>
            <Col style={ iconstyle }>
              <img src={icons2} />{" "}
              <p>User Centred Design Process</p>
            </Col>
            <Col style={ iconstyle }>
              <img src={icons3} />{" "}
              <p>Error Analysis</p>
            </Col>
          </Row>
          <Row>
            <Col style={ iconstyle }>
              <img src={icons4} />{" "}
              <p>Usability Testing</p>
            </Col>
            <Col style={ iconstyle }>
              <img src={icons5} />{" "}
              <p>Illustration & Digital Art</p>
            </Col>
            <Col style={ iconstyle }>
              <img src={icons6} />{" "}
              <p>User Interface design</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

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
    textAlign: 'center',
    padding: '2rem',
}
