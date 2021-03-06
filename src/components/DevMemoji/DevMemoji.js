import React from 'react';
import './DevMemoji.scss';
import devImage from '../../assets/dev-memoji.png';

export default () => {
  return (
    <div className="memoji-container">
      <img src={devImage} className="dev-image" alt="dev-memoji" />
    </div>
  );
};
