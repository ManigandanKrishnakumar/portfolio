import React, {useState, useEffect} from 'react';
import {InitializeTheme} from '../services/ThemeService';

export default () => {
  const [currentTheme, setCurrentTheme] = useState();
  useEffect(() => {
    InitializeTheme(setCurrentTheme);
  }, []);

  return [currentTheme, setCurrentTheme];
};
