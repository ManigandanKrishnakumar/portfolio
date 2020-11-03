import React, {useState} from 'react';
import './Skills.scss';
import SkillCatagory from '../SkillCatagory/SkillCatagory';
import {SKILL_CATAGORIES} from '../../constants/content/skillsContent';
import ScrollAnimation from 'react-animate-on-scroll';
export default () => {
  const [inView, setInView] = useState(false);
  return (
    <ScrollAnimation
      className="skills-container"
      animateIn="fadeIn"
      delay={0}
      afterAnimatedIn={() => {
        setInView(true);
      }}>
      {SKILL_CATAGORIES.map((skill) => {
        return <SkillCatagory skill={skill} key={skill.id} isInView={inView} />;
      })}
    </ScrollAnimation>
  );
};
