import React, { Component } from "react";
import btn from "../assets/images/let-stalk-button.png";

export default class Footer extends Component {
  render() {
    return (
      <div style={footerstyle}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
          <p style={{ color:'white'}}>WHAT’S NEXT?</p>
          <h1 style={{ color:'white'}}>Let’s work together!</h1>
          <p style={{ color:'white'}}>
            If you’d like to talk about some exciting projects where you’d like
            me to help you with user experience, or have a chat about some cool
            visual design projects, I’ll be more than happy to work together!
          </p>
          <img src={btn} />
          <div style={{ borderTopStyle:'solid',borderColor:'#8300c4',marginTop:'14.7%'}}>
            <ul style={{ display:'flex',justifyContent:"space-around"}}>
                <li><a>DRIBBLE</a></li>
                <li><a>BEHANCE</a></li>
                <li><a>INSTAGRAM</a></li>
                <li><a>TWITTER</a></li>
                <li><a>LINKEDIN</a></li>
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
  backgroundImage: 'linear-gradient(221deg, #8300c4, #4c0092)'
};

const footercomp = {
  paddingLeft: "20vw"
};
