import React from 'react';
import './AboutMeContent.scss';
import {ABOUTME_CONTENT} from '../../constants/content/aboutMeContent';

export default () => {
  return (
    <div className="about-me-content-container">
      <div className="about-me-wrapper">
        <h2>{ABOUTME_CONTENT.GREETING}</h2>
        <p className="about-me">{ABOUTME_CONTENT.ABOUT_ME}</p>
      </div>
    </div>
  );
};
