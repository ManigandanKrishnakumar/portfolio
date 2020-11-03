import React from 'react';
import ProjectItem from '../ProjectItemList/ProjectItem';
import './ProjectsList.scss';

export default ({projects}) => {
  const onProjectClick = () => {};
  return (
    <div className="projects-list-container">
        <div className="projects-list-wrapper">
          {
            projects.map((project) => {
              return (
                <ProjectItem key={project.ID} project={project} onClick = {onProjectClick}/>
              )
            })
          }
        </div>
    </div>
  );
};