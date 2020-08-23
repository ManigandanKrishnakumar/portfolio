import React from 'react';
import './App.scss';
import {ThemeProvider} from 'styled-components';
import {getTheme} from './helper-functions/getTheme';
import GlobalStyles from './styled-components/GlobalStyles';
import Header from './components/Header/Header';
import useTheme from './custom-hooks/useTheme';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  const [uiTheme, setUiTheme] = useTheme();
  return (
    <ThemeProvider theme={getTheme(uiTheme)}>
      <GlobalStyles />

      {/* START: Application */}
      <div className="App">
        <Header currentTheme={uiTheme} onThemeChange={setUiTheme} />
        <Banner />
        <AboutMe currentTheme={uiTheme} />
        <UnderConstruction />
      </div>
      {/* END: Application */}
    </ThemeProvider>
  );
}

export default App;
