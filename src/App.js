import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const myName = "Trimikha Valentius";
    const myGithub = "https://github.com/tvalentius";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Halo SMK 1 Mas Ubud</h1>
        </header>
        <p className="App-intro">
          { myName }
          <br />
          <a href={myGithub} target='_blank'> Github Link </a>
        </p>
      </div>
    );
  }
}

export default App;
