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
            <ul style={{ display: "flex", justifyContent: "space-around",padding:0,margin:0 }}>
              <li style={{ padding:'2rem 2rem 2rem 0',listStyle:'none' }}>
                <a style={{ color:'white'}}>DRIBBLE</a>
              </li>
              <li style={{ padding:'2rem 2rem 2rem 0',listStyle:'none' }}>
                <a style={{ color:'white'}}>BEHANCE</a>
              </li>
              <li style={{ padding:'2rem 2rem 2rem 0',listStyle:'none' }}>
                <a style={{ color:'white'}}>INSTAGRAM</a>
              </li>
              <li style={{ padding:'2rem 2rem 2rem 0',listStyle:'none' }}>
                <a style={{ color:'white'}}>TWITTER</a>
              </li>
              <li style={{ padding:'2rem 2rem 2rem 0',listStyle:'none' }}>
                <a style={{ color:'white'}}>LINKEDIN</a>
              </li>
              <li style={{ padding:'2rem 0 2rem 0',listStyle:'none',paddingLeft:'10%',width:'max-content' }}>
                <p style={{ width:'max-content',color:'white' }}>MADE WITH 2019</p>
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
