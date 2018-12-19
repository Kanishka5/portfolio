import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Hireform from './Hire';

class Index extends Component {
    render(){
        return(
            <div className="App">
                <Navbar />
                <Hireform env={this.props.env} />
            </div>
        );
    }
}

Index.propTypes = {
    env: PropTypes.object.isRequired
  };

export default Index;
