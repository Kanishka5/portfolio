import React, { Component } from "react";
import hire from "../assets/images/hire_button.png";
import logo from "../assets/images/logo_mark-01.png";
import cv from "../assets/pdf/CV-18-19.pdf";
import "../assets/css/nav.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: "1rem"
    };
  }

  mouseEnter() {
    console.log("mouse enter");
    this.setState({ fontSize: "1.1rem" });
  }

  mouseLeave() {
    console.log("mouse leave");
    this.setState({ fontSize: "1rem" });
  }
  componentDidMount() {
    let menuIcon = document.querySelector(".menuIcon");
    let nav = document.querySelector(".overlay-menu");

    menuIcon.addEventListener("click", () => {
      if (nav.style.transform !== "translateX(0%)") {
        nav.style.transform = "translateX(0%)";
        nav.style.transition = "transform 0.2s ease-out";
      } else {
        nav.style.transform = "translateX(-200%)";
        nav.style.transition = "transform 0.2s ease-out";
      }
    });

    // Toggle Menu Icon ========================================
    let toggleIcon = document.querySelector(".menuIcon");

    toggleIcon.addEventListener("click", () => {
      if (toggleIcon.className !== "menuIcon toggle") {
        toggleIcon.className += " toggle";
      } else {
        toggleIcon.className = "menuIcon";
      }
    });
  }
  render() {
    return (
      <div className="navbar" style={navstyle}>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
          rel="stylesheet"
        />
        <div className="logo" style={headerStyle}>
          <img
            src={logo}
            style={{
              height: "auto",
              width: window.innerWidth > breakpoints.tablet ? "2.7vw" : "8.2vw",
              position: "absolute",
              top: "3.5vh"
            }}
          />
        </div>
        <nav
          className="navbar"
          style={{
            display: window.innerWidth > breakpoints.tablet ? "block" : "none"
          }}
        >
          <ul className="header_lists" style={tabsstyle}>
            <li style={liststyle}>
              <a href="/" style={{ textDecoration: "none", color: "#984cd5" }}>
                <h2 style={navitems} className="itemhover1">
                  HOME
                </h2>
              </a>
            </li>
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li style={liststyle}>
                <a
                  href="#project"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2 style={navitems} className="itemhover">
                    PROJECT
                  </h2>
                </a>
              </li>
            </Link>

            <li style={liststyle}>
              <a
                href={cv}
                download="Rounak_CV"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h2 style={navitems} className="itemhover">
                  MY CV
                </h2>
              </a>
            </li>
            <li style={liststyle}>
              <a
                href="mailto:rg.uidesign@gmail.com?Subject=I would like to hire you"
                target="_top"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={hire}
                  className="itemhover"
                  style={{ width: "10vw" }}
                />
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="menuIcon"
          style={{
            display: window.innerWidth > breakpoints.tablet ? "none" : "block"
          }}
        >
          <span className="icon icon-bars" />
          <span className="icon icon-bars overlay" />
        </div>
        <div
          className="overlay-menu"
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 600,
            display: window.innerWidth > breakpoints.tablet ? "none" : "block"
          }}
        >
          <ul id="menu">
            <li>
              <a href="/" style={{ color: "#984cd5" }}>
                {" "}
                HOME{" "}
              </a>
            </li>
            <li>
              <a href="#"> PROJECT </a>
            </li>
            <li>
              <a href={cv} download="Rounak_CV">
                {" "}
                MY CV{" "}
              </a>
            </li>
            <li style={liststyle}>
              <a
                href="mailto:rg.uidesign@gmail.com?Subject=I would like to hire you"
                target="_top"
                style={{ textDecoration: "none" }}
              >
                <img src={hire} style={{ width: "50vw" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const menuIconStyle = {
  cursor: "pointer",
  display: "block",
  position: "fixed",
  right: 15,
  top: 20,
  height: 23,
  width: 27,
  zIndex: 56
};

const iconstyle = {
  background: "rgb(13, 26, 38)",
  position: "absolute",
  left: 1,
  top: "45%",
  height: 2,
  width: 20,
  transition: "0.4s"
};

const navitems = {
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 600,
  fontSize: "0.9vw",
  letterSpacing: 0.93
};

const navstyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  paddingRight: "14.6%"
};

const headerStyle = {
  // display: "flex",
  paddingLeft: window.innerWidth > breakpoints.tablet ? "15.3vw" : 0
};

const tabsstyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  JustifyContent: "space-between"
  // marginRight:'10%'
};

const liststyle = {
  listStyle: "none",
  marginLeft: "1.2rem",
  marginRight: "1.2rem"
};
