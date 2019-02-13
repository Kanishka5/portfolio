import React, { Component, Fragment } from "react";

import Navbar from "./Navbar";
import Intro from "./intro";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./skills";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Footer />
      </Fragment>
    );
  }
}

export default Index;
