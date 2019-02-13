import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" style={navstyle}>
        <div className="logo" style={headerStyle}>
          <h1>LOGO </h1>
        </div>
        <nav className="navbar">
          <ul className="header_lists" style={tabsstyle}>
            <li style={liststyle}>
              <a href="/" style={{ textDecoration: "none" }}>
                <h2>HOME</h2>
              </a>
            </li>
            <li style={liststyle}>
              <a href="#project" style={{ textDecoration: "none" }}>
                <h2>PROJECT</h2>
              </a>
            </li>
            <li style={liststyle}>
              <a href="#about" style={{ textDecoration: "none" }}>
                <h2>ABOUT</h2>
              </a>
            </li>
            <li style={liststyle}>
              <a
                href="mailto:someone@example.com?Subject=Hello%20again"
                target="_top"
                style={{ textDecoration: "none" }}
              >
                <h2>HIRE ME</h2>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const navstyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "10vh",
  backgroundColor: "transparent",
  paddingRight: "5%"
};

const headerStyle = {
  display: "flex",
  paddingLeft: "13%"
};

const tabsstyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  JustifyContent: "space-between"
  // marginRight:'10%'
};

const liststyle = {
  listStyle: "none",
  marginLeft: "1.2rem",
  marginRight: "1.2rem"
};
