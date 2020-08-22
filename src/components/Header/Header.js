import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

export default ({currentTheme, onThemeChange}) => {
  return (
    <div className="header-container">
      <Logo theme={currentTheme} />
      <ThemeSwitch theme={currentTheme} onThemeChange={onThemeChange} />
    </div>
  );
};
