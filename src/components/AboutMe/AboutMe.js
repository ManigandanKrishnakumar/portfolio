import React from 'react';
import './AboutMe.scss';
import WorkSpaceImage from '../WorkSpaceImage/WorkSpaceImage';
import AboutMeContent from '../AboutMeContent/AboutMeContent';

export default ({currentTheme}) => {
  return (
    <div className="about-me-container">
      <WorkSpaceImage currentTheme={currentTheme} />
      <AboutMeContent />
    </div>
  );
};
