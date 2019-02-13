import React, { Component } from "react";
import btn from "../assets/images/let-stalk-button.png";

export default class Footer extends Component {
  render() {
    return (
      <div style={footerstyle}>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:600,400"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
          rel="stylesheet"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#fac564"
            }}
          >
            WHAT’S NEXT?
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "3.5rem",
              color: "white"
            }}
          >
            Let’s w<span style={{ color: "#fac564" }}>o</span>r
            <span style={{ color: "#fac564" }}>k</span> together!
          </h1>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 400,
              lineHeight: "34px",
              fontSize: "1.5rem",
              letterSpacing: "0.5px",
              maxWidth: "791px",
              width: "54.1vw",
              textAlign: "center",
              color: "white"
            }}
          >
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
              marginTop: "5.7%"
            }}
          >
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: 0,
                margin: 0
              }}
            >
              <li style={{ padding: "2rem 2rem 2rem 0", listStyle: "none" }}>
                <a style={linkStyle}>DRIBBLE</a>
              </li>
              <li style={{ padding: "2rem 2rem 2rem 0", listStyle: "none" }}>
                <a style={linkStyle}>BEHANCE</a>
              </li>
              <li style={{ padding: "2rem 2rem 2rem 0", listStyle: "none" }}>
                <a style={linkStyle}>INSTAGRAM</a>
              </li>
              <li style={{ padding: "2rem 2rem 2rem 0", listStyle: "none" }}>
                <a style={linkStyle}>TWITTER</a>
              </li>
              <li style={{ padding: "2rem 2rem 2rem 0", listStyle: "none" }}>
                <a style={linkStyle}>LINKEDIN</a>
              </li>
              <li
                style={{
                  padding: "2rem 0 2rem 0",
                  listStyle: "none",
                  paddingLeft: "10%",
                  width: "max-content"
                }}
              >
                <p style={{ width: "max-content", color: "white" }}>
                  MADE WITH 2019
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const linkStyle = {
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 600,
  fontSize: "0.875rem",
  letterSpacing: "0.58px",
  opacity: 0.85,
  color: "white"
};

const footerstyle = {
  display: "flex",
  right: 0,
  left: 0,
  paddingTop: 50,
  marginTop: 50,
  backgroundImage: "linear-gradient(221deg, #8300c4, #4c0092)"
};
