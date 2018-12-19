import React, { Component } from 'react';

import Index from './components/index';
import { env } from './config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index env={env} />
      </div>
    );
  }
}

export default App;
