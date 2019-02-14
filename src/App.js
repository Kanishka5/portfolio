import React, { Component } from 'react';

import { env } from './config';
import BaseRouter from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor:'#f8f9fa',overflowX:"hidden"}}>
        <BaseRouter env={env} />
      </div>
    );
  }
}

export default App;
