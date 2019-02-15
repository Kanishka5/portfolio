import React, { Component } from "react";
import landing_ilst from "../assets/images/artwork-landing-page-01@3x.png";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

export default class Intro extends Component {
  render() {
    return (
      <div className="intro" style={introstyle}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:600,700"
          rel="stylesheet"
        />

        <div style={introtxtstyle}>
          <div className="introtxt">
            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "3.5rem",
                letterSpacing: "3.27px",
                color: "#343a40"
              }}
            >
              Hello, I’m <br /> <font color="#984cd5">Ron</font>
            </h1>
            <p
              style={{
                width: "100%",
                color: "#8c93bd",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: "1.5rem"
              }}
            >
              I’m a User Experience Designer who is <b>obsessed</b> with
              user-friendly designs. I try to solve product problems using
              user-centred design principles through solutions which have a
              meaningful impact. You can find my latest works on{" "}
              <font color="#984cd5">Dribbble </font>
              and <font color="#984cd5">Behance</font>, and for regular design
              posts follow my <font color="#984cd5">Instagram</font>.
            </p>
          </div>
        </div>
        <div
          style={{ width: "57.4%", marginRight: "3.6%", position: "relative" }}
        >
          <div className="ilust1" style={imgstyle_back}>
            <img
              alt="illustration"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                opacity: 0.07,
                mixBlendMode: "darken"
              }}
              src={landing_ilst}
            />
          </div>
          <div className="ilust1" style={imgstyle_frnt}>
            <img
              alt="illustration"
              style={{ height: "auto", width: "100%" }}
              src={landing_ilst}
            />
          </div>
        </div>
      </div>
    );
  }
}

const introstyle = {
  display: "flex"
};

const introtxtstyle = {
  width: window.innerWidth > breakpoints.tablet ? "24.3%" : "auto",
  fontSize: "1.2rem",
  marginLeft: window.innerWidth > breakpoints.tablet ? "15.7%" : 0,
  position: "relative",
  left: "6.3%",
  top: "20vh",
  lineHeight: "22px"
};

const btnstyle = {
  padding: "0.5rem",
  borderRadius: "0.3rem",
  border: 0
};

const imgstyle_frnt = {
  display: window.innerWidth > breakpoints.tablet ? "block" : "none",
  width: "75.3%",
  position: "absolute",
  right: "6.5%",
  top: "6.4vh"
};

const imgstyle_back = {
  width: window.innerWidth > breakpoints.tablet ? "100%" : "80vw",
  top: window.innerWidth > breakpoints.tablet ? 0 : "10vh",
  position: "absolute",
  right: 0
};
