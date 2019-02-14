import React, { Component } from "react";
import hire from "../assets/images/hire-button.png";
import "../assets/css/nav.css";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

export default class Navbar extends Component {
  componentDidMount() {
    let menuIcon = document.querySelector(".menuIcon");
    let nav = document.querySelector(".overlay-menu");

    menuIcon.addEventListener("click", () => {
      if (nav.style.transform !== "translateX(0%)") {
        nav.style.transform = "translateX(0%)";
        nav.style.transition = "transform 0.2s ease-out";
      } else {
        nav.style.transform = "translateX(-100%)";
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
          <h1>LOGO </h1>
        </div>
        <nav
          className="navbar"
          style={{
            display: window.innerWidth > breakpoints.tablet ? "block" : "none"
          }}
        >
          <ul className="header_lists" style={tabsstyle}>
            <li style={liststyle}>
              <a href="/" style={{ textDecoration: "none" }}>
                <h2 style={navitems}>HOME</h2>
              </a>
            </li>
            <li style={liststyle}>
              <a href="#project" style={{ textDecoration: "none" }}>
                <h2 style={navitems}>PROJECT</h2>
              </a>
            </li>
            <li style={liststyle}>
              <a href="#about" style={{ textDecoration: "none" }}>
                <h2 style={navitems}>ABOUT</h2>
              </a>
            </li>
            <li style={liststyle}>
              <a
                href="mailto:rg.uidesign@gmail.com?Subject=I would like to hire you"
                target="_top"
                style={{ textDecoration: "none" }}
              >
                <img src={hire} />
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
            display: window.innerWidth > breakpoints.tablet ? "none" : "block"
          }}
        >
          <ul id="menu">
            <li>
              <a href="#"> ABOUT </a>
            </li>
            <li>
              <a href="#"> AAROHAN </a>
            </li>
            <li>
              <a href="#"> CELLS </a>
            </li>
            <li>
              <a href="#"> MEMBERS </a>
            </li>
            <li>
              <a href="#"> CONTACT US </a>
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
  fontSize: "1rem",
  letterSpacing: 0.93,
  color: "black"
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
  display: "flex",
  paddingLeft: "13%"
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
