import React from 'react';
import { getIcon } from '../../services/IconService';
import './ProjectItem.scss';

export default ({project, onClick}) => {
  const Icon = getIcon(project.ICON.FAMILY, project.ICON.NAME);
  return (
    <div className="project-item-container">
      <div className="project-image-container">
        <Icon className="icon fade-in"/>
      </div>
      <div className="project-desc-container">
        <p className="project-name">{project.NAME}</p>
        <p className="project-desc">{project.DESC}</p>
        <p className="tech-stack"><span className="label">Tech Stack: </span> {' '+ project.TECH_STACK }</p>
      </div>
    </div>
  );
}