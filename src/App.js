import React, {useState} from 'react';
import logo from './logo.svg';
import devImage from './assets/mani.png';
import './App.scss';
import {IoIosConstruct} from 'react-icons/io';
import {ThemeProvider} from 'styled-components';
import {getTheme} from './helper-functions/getTheme';
import {THEMES} from './constants/theme';
import GlobalStyles from './styled-components/GlobalStyles';
import Header from './components/Header/Header';
import useTheme from './custom-hooks/useTheme';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';

function App() {
  const [uiTheme, setUiTheme] = useTheme();
  return (
    <ThemeProvider theme={getTheme(uiTheme)}>
      <GlobalStyles />
      <div className="App">
        <Header currentTheme={uiTheme} onThemeChange={setUiTheme} />
        <UnderConstruction />
      </div>
    </ThemeProvider>
  );
}

export default App;
