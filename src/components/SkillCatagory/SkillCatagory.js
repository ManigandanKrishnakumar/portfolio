import React from 'react';
import './SkillCatagory.scss';
import {getIcon} from '../../services/IconService';
import TechBar from '../TechBar/TechBar';

export default ({skill, isInView}) => {
  const Icon = getIcon(skill.CATAGORY_ICON.FAMILY, skill.CATAGORY_ICON.NAME);
  return (
    <div className="skill-catagory-container">
      <Icon className="skill-catagory-icon" />
      <h2>{skill.CATAGORY_NAME}</h2>
      <p>{skill.CATAGORY_DESC}</p>

      {/* <p className="bold label">{skill.SKILLS_LABEL}</p> */}

      <div className="skills-list">
        {skill.SKILLS.map((tech) => {
          return <TechBar key={tech.id} isInView={isInView} tech={tech} />;
        })}
      </div>
    </div>
  );
};
