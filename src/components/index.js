import React, { Component,Fragment } from 'react';

import Navbar from './Navbar';
import Intro from './intro';
import Footer from './Footer';
import Projects from './Projects';

class Index extends Component {
    render(){
        return(
            <Fragment>
                <Navbar />
                <Intro />
                <Projects />
                <Footer />
            </Fragment>
        );
    }
}

export default Index;
