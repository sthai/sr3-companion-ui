import React, { Component } from 'react';
import logo from './sr5_name_only.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Shadowrun" />
          <h2>Shadowrun Companion</h2>
        </div>
        <p className="App-intro">
          Shadowrun 3rd Ed. pen & paper RPG Game Master tool suite.
        </p>
      </div>
    );
  }
}

export default App;
