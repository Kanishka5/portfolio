import React, { Component } from 'react';

import { env } from './config';
import BaseRouter from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseRouter env={env} />
      </div>
    );
  }
}

export default App;
