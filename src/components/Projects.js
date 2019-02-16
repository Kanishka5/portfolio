import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import project1 from "../assets/images/ecogrocer_cover.png";
import project2 from "../assets/images/kloh_cover.png";
import project3 from "../assets/images/knowdata-cover.png";
import project4 from "../assets/images/pregbuddy_cover.png";
import project5 from "../assets/images/visual_cover.png";
import project6 from "../assets/images/web_cover.png";
import project7 from "../assets/images/media_image.png";
import casestudy from "../assets/images/case-study-button.png";
import behance1 from "../assets/images/project-button@2x.png";
import dribble from "../assets/images/dribbble@2x.png";
import arhn17 from "../assets/images/arhn17@2x.png";
import arhn18 from "../assets/images/arhn18@2x.png";
import social1 from "../assets/images/social1@2x.png";
import social2 from "../assets/images/social2@2x.png";
import Fade from "react-reveal/Fade";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

export default class Intro extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: window.innerWidth > breakpoints.tablet ? "66%" : "90%",
          marginLeft: window.innerWidth > breakpoints.tablet ? "17%" : "5%",
          marginTop: window.innerWidth > breakpoints.tablet ? "60vh" : "35vh",
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
        <div
          style={{
            position: "relative",
            width: "83%"
          }}
        >
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
                fontSize:
                  window.innerWidth > breakpoints.tablet ? "4.5rem" : "3rem"
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
        <Container
          style={{
            marginTop: window.innerWidth > breakpoints.tablet ? "10vh" : "20vh",
            Width: "83vw",
            maxWidth: "100vw"
          }}
        >
          <Fade left>
            <Row style={{ paddingTop: "15vh" }}>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project1} style={imgStyle} />{" "}
              </Col>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row style={textdiv}>
                  <h2 style={headStyle}>
                    Eco Grocer App - UX Design <br /> Process
                  </h2>
                  <p style={paraStyle1}>
                    This project focuses on the design of an application which
                    is built to make the people of the United Kingdom aware of
                    the environmental impact of their dietary consumptions and
                    help them track and reduce their diet’s environmental
                    impact.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: "7vw",
                    bottom: -27
                  }}
                >
                  <a
                    href="https://blog.prototypr.io/ecogrocer-app-an-ux-case-study-2e2a9dba5d8e"
                    target="_blank"
                  >
                    <img src={casestudy} style={{ width: 210 }} />
                  </a>
                  <a
                    href="https://www.behance.net/gallery/73902753/GreenGrocer-an-UX-case-study-and-process-development"
                    target="_blank"
                  >
                    <img src={behance1} style={{ width: 260 }} />
                  </a>
                </Row>
              </Col>
            </Row>
          </Fade>
          <Fade right>
            <Row
              style={{
                paddingTop: "15vh"
              }}
            >
              <Col
                xs={{ order: 12 }}
                lg={{ order: 1 }}
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row
                  style={{
                    paddingLeft:
                      window.innerWidth > breakpoints.tablet ? "auto" : "5vw",
                    textAlign:
                      window.innerWidth > breakpoints.tablet ? "auto" : "left"
                  }}
                >
                  <h2 style={headStyle}>
                    Kloh App Redesign - UI/UX <br /> Internship
                  </h2>
                  <p style={paraStyle2}>
                    My work with Kloh - a startup based in Bengaluru, India, who
                    aims to organise events which enables people to meet
                    offline, involved the redesign of their android application
                    with the incorporation of 5 new functionalities. My role
                    involved user research, developing wireframes, rendering
                    visual interfaces, rapid prototyping, usability testing,
                    micro-interactions, design evaluation.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: 0,
                    bottom: -27
                  }}
                >
                  <a>
                    <img src={casestudy} style={{ width: 210 }} />
                  </a>
                  <a href="https://dribbble.com/drifted_galaxy" target="_blank">
                    <img src={dribble} style={{ width: 260 }} />
                  </a>
                </Row>{" "}
              </Col>
              <Col
                xs={{ order: 1 }}
                lg={{ order: 12 }}
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project2} style={imgStyle} />{" "}
              </Col>
            </Row>
          </Fade>
          <Fade left>
            <Row style={{ paddingTop: "15vh" }}>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project3} style={imgStyle} />{" "}
              </Col>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row style={textdiv}>
                  <h2 style={headStyle}>
                    Knowdata App Design - UI <br /> Internship
                  </h2>
                  <p style={paraStyle1}>
                    My work with Algebra Analytics - a startup based in Gurgaon,
                    India, which works on providing digital learning platform
                    for the high school and university students of India, was
                    one of the full-project remote internships. The main project
                    I worked on was the interface design of a digital learning
                    application for android platform named as Knowdata. My role
                    involved generating wireframes, rendering visual interfaces,
                    rapid prototyping and usability testing.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: "7vw",
                    bottom: -27
                  }}
                >
                  <a
                    href="https://www.behance.net/gallery/56701585/Knowdata-education-app-User-Interface-Design"
                    target="_blank"
                  >
                    <img src={behance1} style={{ width: 260 }} />
                  </a>
                </Row>
              </Col>
            </Row>
          </Fade>
          <Fade right>
            <Row style={{ paddingTop: "15vh" }}>
              <Col
                xs={{ order: 12 }}
                lg={{ order: 1 }}
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row
                  style={{
                    paddingLeft:
                      window.innerWidth > breakpoints.tablet ? "auto" : "5vw",
                    textAlign:
                      window.innerWidth > breakpoints.tablet ? "auto" : "left"
                  }}
                >
                  <h2 style={headStyle}>Pregbuddy App - UI Internship</h2>
                  <p style={paraStyle2}>
                    The work with Pregbuddy - a large scale startup based in
                    Bengaluru, India, which has a full-scale product providing
                    aids for pregnant women across India. The project I worked
                    on included redesign of some of the screens of their
                    existing android application, and the development of
                    wireframes for a weight-tracker project. My role involved
                    illustration, visual design, interface design,
                    microinteractions, wireframing, content structure and
                    prototyping.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: 0,
                    bottom: -27
                  }}
                >
                  <a
                    href="https://www.behance.net/gallery/54118173/Weight-tracker-project-Pregbuddy-app-UI-concepts"
                    target="_blank"
                  >
                    <img src={behance1} style={{ width: 260 }} />
                  </a>
                </Row>
              </Col>
              <Col
                xs={{ order: 1 }}
                lg={{ order: 12 }}
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project4} style={imgStyle} />{" "}
              </Col>
            </Row>
          </Fade>
          <Fade left>
            <Row style={{ paddingTop: "15vh" }}>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project5} style={imgStyle} />{" "}
              </Col>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row style={textdiv}>
                  <h2 style={headStyle}>
                    Visual Design Projects : <br /> Aarohan 2017 & 2018
                  </h2>
                  <p style={paraStyle1}>
                    As a part of the Web Design & Creative Team of NIT Durgapur,
                    my responsibility was designing a wide range of visual
                    projects involving posters, banners, flex, visiting cards
                    for the annual festival of our college. I was also bestowed
                    the responsibility of Head of the design team during
                    2017-18.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: "7vw",
                    bottom: -27
                  }}
                >
                  <a
                    href="https://www.behance.net/gallery/51355885/Aarohan-2017-Posters"
                    target="_blank"
                  >
                    <img src={arhn17} style={{ width: 320 }} />
                  </a>
                  <a
                    href="https://www.behance.net/gallery/63676451/AAROHAN-2018-POSTERS"
                    target="_blank"
                  >
                    <img src={arhn18} style={{ width: 320 }} />
                  </a>
                </Row>{" "}
              </Col>
            </Row>
          </Fade>
          <Fade right>
            <Row style={{ paddingTop: "15vh" }}>
              <Col
                xs={{ order: 12 }}
                lg={{ order: 1 }}
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row
                  style={{
                    paddingLeft:
                      window.innerWidth > breakpoints.tablet ? "auto" : "5vw",
                    textAlign:
                      window.innerWidth > breakpoints.tablet ? "auto" : "left"
                  }}
                >
                  <h2 style={headStyle}>Website Design - Aarohan 18</h2>
                  <p style={paraStyle2}>
                    This project is about the design of website for a
                    techno-management fest of NIT Durgapur, the theme for the
                    year 2018 being exploration of space through technological
                    innovation based of Elon Musk’s Mars Mission. The entire
                    design was based on the outer space and made interactive
                    with a festive vibe & lively illustrations.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: 0,
                    bottom: -27
                  }}
                >
                  <a
                    href="https://www.behance.net/gallery/63648505/AAROHAN-2018-WEBSITE-DESIGN-DEVELOPMENT"
                    target="_blank"
                  >
                    <img src={behance1} style={{ width: 260 }} />
                  </a>
                </Row>
              </Col>
              <Col
                xs={{ order: 1 }}
                lg={{ order: 12 }}
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project6} style={imgStyle} />{" "}
              </Col>
            </Row>
          </Fade>
          <Fade left>
            <Row style={{ paddingTop: "15vh" }}>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <img src={project7} style={imgStyle} />{" "}
              </Col>
              <Col
                style={{
                  padding: 0,
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center"
                }}
              >
                <Row style={textdiv}>
                  <h2 style={headStyle}>
                    Social Media Post Design <br />
                    Project
                  </h2>
                  <p style={paraStyle1}>
                    This project puts up a bunch of creatives for Facebook and
                    Instagram for several occasions. The posts are created from
                    scratch to depict a creative way of designing social media
                    posts.
                  </p>
                </Row>
                <Row
                  style={{
                    flexDirection: "column",
                    position:
                      window.innerWidth > breakpoints.tablet
                        ? "absolute"
                        : "static",
                    left: "7vw",
                    bottom: -27
                  }}
                >
                  <a
                    href="https://www.behance.net/gallery/63686341/Social-media-posts-Vol-2"
                    target="_blank"
                  >
                    <img src={social2} style={{ width: 320 }} />
                  </a>
                  <a
                    href="https://www.behance.net/gallery/56745539/Social-media-posts-vol-1"
                    target="_blank"
                  >
                    <img src={social1} style={{ width: 320 }} />
                  </a>
                </Row>{" "}
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    );
  }
}

const textdiv = {
  paddingLeft: window.innerWidth > breakpoints.tablet ? "7vw" : "5vw",
  textAlign: window.innerWidth > breakpoints.tablet ? "auto" : "left"
};

const paraStyle2 = {
  paddingTop: window.innerWidth > breakpoints.tablet ? "1rem" : "0.8rem",
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 400,
  fontSize: window.innerWidth > breakpoints.tablet ? "1.15vw" : "1rem",
  lineHeight: window.innerWidth > breakpoints.tablet ? "1.9vw" : "1.55rem",
  maxWidth: "90%",
  color: "#4a4a4a"
};

const paraStyle1 = {
  paddingTop: window.innerWidth > breakpoints.tablet ? "1rem" : "0.8rem",
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 400,
  fontSize: window.innerWidth > breakpoints.tablet ? "1.15vw" : "1rem",
  lineHeight: window.innerWidth > breakpoints.tablet ? "1.9vw" : "1.55rem",
  maxWidth: window.innerWidth > breakpoints.tablet ? "auto" : "90%",
  color: "#4a4a4a"
};

const headStyle = {
  fontFamily: "Playfair Display, serif",
  fontWeight: 700,
  fontSize: window.innerWidth > breakpoints.tablet ? "1.9vw" : "1.5rem",
  paddingTop: window.innerWidth > breakpoints.tablet ? 0 : "2rem"
};

const imgStyle = {
  width: window.innerWidth > breakpoints.tablet ? "33.2vw" : "90vw"
};
