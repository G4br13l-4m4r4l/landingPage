import React, { Component } from 'react';
import Head from './components/header';
import Body from './components/Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Body/>
        <h4>Developed by @dev.gabriel.amaral</h4>
      </div>
    );
  }
}

export default App;
