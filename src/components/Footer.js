import React, { Component } from "react";
import btn from "../assets/images/let-stalk-button.png";

export default class Footer extends Component {
  render() {
    return (
      <div style={footerstyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <p style={{ color: "white" }}>WHAT’S NEXT?</p>
          <h1 style={{ color: "white" }}>Let’s work together!</h1>
          <p style={{ color: "white" }}>
            If you’d like to talk about some exciting projects where you’d like
            me to help you with user experience, or have a chat about some cool
            visual design projects, I’ll be more than happy to work together!
          </p>
          <a
            href="mailto:someone@example.com?Subject=Hello%20again"
            target="_top"
          >
            <img src={btn} />
          </a>
          <div
            style={{
              borderTopStyle: "solid",
              borderColor: "#8300c4",
              marginTop: "10.7%"
            }}
          >
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
              <li style={{ padding:'2rem 2rem 0px 2rem' }}>
                <a>DRIBBLE</a>
              </li>
              <li style={{ padding:'2rem 2rem 0 2rem' }}>
                <a>BEHANCE</a>
              </li>
              <li style={{ padding:'2rem 2rem 0 2rem' }}>
                <a>INSTAGRAM</a>
              </li>
              <li style={{ padding:'2rem 2rem 0 2rem' }}>
                <a>TWITTER</a>
              </li>
              <li style={{ padding:'2rem 2rem 0 2rem' }}>
                <a>LINKEDIN</a>
              </li>
              <li style={{ padding:'2rem 2rem 0 2rem',paddingLeft:'10%' }}>
                <p>MADE WITH 2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const footerstyle = {
  display: "flex",
  right: 0,
  left: 0,
  paddingTop: 50,
  marginTop: 50,
  backgroundImage: "linear-gradient(221deg, #8300c4, #4c0092)"
};

const footercomp = {
  paddingLeft: "20vw"
};
