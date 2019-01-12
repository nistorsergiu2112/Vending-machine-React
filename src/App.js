import React, { Component } from 'react';
import Glass from './Glass'
import FrontPanel from './FrontPanel'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Glass />
        <FrontPanel />
      </div>
    );
  }
}

export default App;
