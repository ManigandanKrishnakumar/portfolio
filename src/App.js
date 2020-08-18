import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {IoIosConstruct} from 'react-icons/io';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hi ! I'm Manigandan. </h1>
        <IoIosConstruct className="construction-icon" />
        <p>This site is under construction. Please Visit back Later.</p>
      </header>
    </div>
  );
}

export default App;
