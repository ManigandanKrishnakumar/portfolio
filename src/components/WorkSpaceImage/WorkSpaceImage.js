import React from 'react';
import './WorkSpaceImage.scss';
import devLight from '../../assets/dev.svg';
import devDark from '../../assets/dev-dark.svg';
import {THEMES} from '../../constants/theme';

export default ({currentTheme}) => {
  return (
    <div className="workspace-img-container">
      <div className="workspace-img-wrapper">
        <img
          src={currentTheme === THEMES.LIGHT ? devLight : devDark}
          className="work-space-image"
        />
      </div>
    </div>
  );
};
