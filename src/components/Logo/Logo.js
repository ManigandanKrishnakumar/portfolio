import React from 'react';
import logoWhite from '../../assets/mani-logo-white.svg';
import logoPurple from '../../assets/mani-logo.svg';
import logoFooter from '../../assets/mani-logo-footer.svg';
import {THEMES} from '../../constants/theme';
import './Logo.scss';

export default ({theme}) => {
  let source;
  if(theme === THEMES.LIGHT) {
    source = logoPurple;
  } else if (theme === THEMES.DARK) {
    source = logoWhite;
  } else {
    source = logoFooter
  }
  return (
    <div className="logo-container">
      <img
        src={source}
        className="logo-img"
        height="48"
        alt="logo"
      />
    </div>
  );
};
