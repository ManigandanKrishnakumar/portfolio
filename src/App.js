import React, {useState} from 'react';
import logo from './logo.svg';
import devImage from './assets/mani.png';
import './App.scss';
import {IoIosConstruct} from 'react-icons/io';
import {ThemeProvider} from 'styled-components';
import {getTheme} from './helper-functions/getTheme';
import {THEMES} from './constants/theme';
import GlobalStyles from './styled-components/GlobalStyles';

function App() {
  const [uiTheme, setUiTheme] = useState(THEMES.LIGHT);
  return (
    <ThemeProvider theme={getTheme(uiTheme)}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={devImage} className="App-logo" alt="logo" />
          <h1> Hi ! I'm Manigandan. </h1>
          <IoIosConstruct className="construction-icon" />
          <p>This site is under construction. Please Visit back Later.</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
