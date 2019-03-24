import React, { Component } from "react";
import btn from "../assets/images/let-stalk-button@2x.png";
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
              fontSize: "1rem",
              letterSpacing: 7,
              color: "#fac564"
            }}
          >
            WHAT’S NEXT?
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize:
                window.innerWidth > breakpoints.tablet ? "3.1vw" : "2.2rem",
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
              lineHeight:
                window.innerWidth > breakpoints.tablet ? "1.7vw" : "1.8rem",
              fontSize:
                window.innerWidth > breakpoints.tablet ? "1.05vw" : "1rem",
              letterSpacing: "0.5px",
              maxWidth: "791px",
              width: window.innerWidth > breakpoints.tablet ? "45.1vw" : "auto",
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
            className="footerlink"
            href="mailto:rg.uidesign@gmail.com?Subject=I would like to hire you"
            target="_top"
          >
            <img
              className="itemhover"
              alt="Hire Me"
              src={btn}
              style={{
                width:
                  window.innerWidth > breakpoints.tablet ? "15.3vw" : "50vw",
                paddingTop: "1rem"
              }}
            />
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
                  className="footerlink"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="footerlink"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="footerlink"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="footerlink"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="footerlink"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <p
                  style={{
                    width: "-moz-max-content",
                    width: "max-content",
                    color: "white"
                  }}
                >
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
  // color: "white",
  textDecoration: "none"
};

const footerstyle = {
  display: "flex",
  right: 0,
  left: 0,
  paddingTop: 50,
  marginTop: 50,
  backgroundImage: "linear-gradient(221deg, #8300c4, #4c0092)"
};
