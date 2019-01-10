import React, { Component } from 'react';
import './App.css';
// import Card from './Card/index.js';
import Forecast from './Forecast/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather</h1>
        </header>
        <div>
          <br/>
          <Forecast />
        </div>
      </div>
    );
  }
}

export default App;
