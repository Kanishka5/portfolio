import React, { Component } from "react";
import hire from "../assets/images/hire-button.png";

export default class Navbar extends Component {
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
        <nav className="navbar">
          <ul className="header_lists" style={tabsstyle}>
            <li style={liststyle}>
              <a href="/" style={{ textDecoration: "none", }}>
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
                href="mailto:someone@example.com?Subject=Hello%20again"
                target="_top"
                style={{ textDecoration: "none" }}
              >
                <img src={hire} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

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
