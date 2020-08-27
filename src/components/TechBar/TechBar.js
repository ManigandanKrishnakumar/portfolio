import React from 'react';
import './TechBar.scss';
import {getIcon} from '../../services/IconService';

const TechBar = ({isInView, tech}) => {
  const TechIcon = getIcon(tech.ICON.FAMILY, tech.ICON.NAME);
  return (
    <div className="tech-bar-container">
      <TechIcon className="tech-icon" color={tech.ICON.COLOR} />
      <div className="progress-bar">
        <div
          className="progress"
          style={{width: isInView ? tech.PROGRESS + '%' : 0}}>
          <span className="tech-name"></span>
        </div>
      </div>
    </div>
  );
};

export default TechBar;
