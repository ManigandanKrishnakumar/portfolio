import React from 'react';
import logoWhite from '../../assets/mani-logo-white.svg';
import logoPurple from '../../assets/mani-logo.svg';
import {THEMES} from '../../constants/theme';
import './Logo.scss';

export default ({theme}) => {
  return (
    <div className="logo-container">
      <img
        src={theme === THEMES.LIGHT ? logoPurple : logoWhite}
        className="logo-img"
        height="48"
      />
    </div>
  );
};
