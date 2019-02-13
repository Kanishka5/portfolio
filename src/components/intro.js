import React, { Component } from "react";
import landing_ilst from "../assets/images/artwork-landing-page-01.png";

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
        <div style={introtxtstyle}>
          <div className="introtxt">
            <h1>
              Hello, I’m <br /> Ron
            </h1>
            <p style={{ width: "100%" }}>
              I’m a User Experience Designer who is obsessed with user-friendly
              designs. I try to solve product problems using user-centred design
              principles through solutions which have a meaningful impact. You
              can find my latest works on Dribbble and Behance, and for regular
              design posts follow my Instagram.
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
  width: "27.3%",
  fontSize: "1.2rem",
  marginLeft: "10.7%",
  position: "relative",
  left: "6.3%",
  top: "12vh"
};

const btnstyle = {
  padding: "0.5rem",
  borderRadius: "0.3rem",
  border: 0
};

const imgstyle_frnt = {
  width: "75.3%",
  position: "absolute",
  right: "6.5%",
  top: "6.4vh"
};

const imgstyle_back = {
  width: "100%",
  position: "absolute",
  right: 0
};
