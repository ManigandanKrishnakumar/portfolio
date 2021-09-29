import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

export default ({currentTheme, onThemeChange}) => {
  return (
    <div className="header-container">
      <a href="#banner">
        <Logo theme={currentTheme} />
      </a>
      <ThemeSwitch theme={currentTheme} onThemeChange={onThemeChange} />
    </div>
  );
};
