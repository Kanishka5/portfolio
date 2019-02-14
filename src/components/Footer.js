import React, { Component } from "react";
import btn from "../assets/images/let-stalk-button.png";
import { FaHeart } from "react-icons/fa";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

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
              color: "white",
              textAlign:
                window.innerWidth > breakpoints.tablet ? "auto" : "center"
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
              width: window.innerWidth > breakpoints.tablet ? "54.1vw" : "auto",
              textAlign: "center",
              color: "white",
              padding: window.innerWidth > breakpoints.tablet ? 0 : "2vh"
            }}
          >
            If you’d like to talk about some exciting projects where you’d like
            me to help you with user experience, or have a chat about some cool
            visual design projects, I’ll be more than happy to work together!
          </p>
          <a
            href="mailto:rg.uidesign@gmail.com?Subject=I would like to hire you"
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
                display:
                  window.innerWidth > breakpoints.tablet ? "flex" : "block",
                justifyContent: "space-around",
                padding: 0,
                margin: 0,
                paddingTop: window.innerWidth > breakpoints.tablet ? 0 : "2rem"
              }}
            >
              <li
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center",
                  padding:
                    window.innerWidth > breakpoints.tablet
                      ? "2rem 2rem 2rem 0"
                      : "2rem",
                  listStyle: "none"
                }}
              >
                <a
                  target="_blank"
                  href="https://dribbble.com/drifted_galaxy"
                  style={linkStyle}
                >
                  DRIBBBLE
                </a>
              </li>
              <li
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center",
                  padding:
                    window.innerWidth > breakpoints.tablet
                      ? "2rem 2rem 2rem 0"
                      : "2rem",
                  listStyle: "none"
                }}
              >
                <a
                  target="_blank"
                  href="https://www.behance.net/Rounak0713"
                  style={linkStyle}
                >
                  BEHANCE
                </a>
              </li>
              <li
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center",
                  padding:
                    window.innerWidth > breakpoints.tablet
                      ? "2rem 2rem 2rem 0"
                      : "2rem",
                  listStyle: "none"
                }}
              >
                <a
                  target="_blank"
                  href="https://www.instagram.com/drifted_galaxy"
                  style={linkStyle}
                >
                  INSTAGRAM
                </a>
              </li>
              <li
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center",
                  padding:
                    window.innerWidth > breakpoints.tablet
                      ? "2rem 2rem 2rem 0"
                      : "2rem",
                  listStyle: "none"
                }}
              >
                <a
                  target="_blank"
                  href="https://twitter.com/Ronuxdesign"
                  style={linkStyle}
                >
                  TWITTER
                </a>
              </li>
              <li
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center",
                  padding:
                    window.innerWidth > breakpoints.tablet
                      ? "2rem 2rem 2rem 0"
                      : "2rem",
                  listStyle: "none"
                }}
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rounak-ghosh-53a21b136/"
                  style={linkStyle}
                >
                  LINKEDIN
                </a>
              </li>
              <li
                style={{
                  textAlign:
                    window.innerWidth > breakpoints.tablet ? "auto" : "center",
                  padding: "2rem 0 2rem 0",
                  listStyle: "none",
                  paddingLeft: "10%",
                  width: "max-content"
                }}
              >
                <p style={{ width: "max-content", color: "white" }}>
                  MADE WITH <FaHeart style={{ color: "red" }} /> 2019
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
