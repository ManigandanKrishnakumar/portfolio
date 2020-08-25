import React from 'react';
import './Skills.scss';
import SkillCatagory from '../SkillCatagory/SkillCatagory';
import {SKILL_CATAGORIES} from '../../constants/content/skillsContent';

export default ({skill}) => {
  return (
    <div className="skills-container">
      {SKILL_CATAGORIES.map((skill) => {
        return <SkillCatagory skill={skill} key={skill.id} />;
      })}
    </div>
  );
};
