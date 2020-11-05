import React from 'react';
import { useState } from 'react';
import ClientProjectModal from '../ClientProjectModal/ClientProjectModal';
import ProjectItem from '../ProjectItemList/ProjectItem';
import './ProjectsList.scss';

export default ({projects, type}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedProject, setClickedProject] = useState();
  const onProjectClick = (project) => {
    console.log(project);
    setClickedProject(project);
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setClickedProject(undefined);
    setIsModalOpen(false);
  };
  return (
    <div className="projects-list-container">
        <div className="projects-list-wrapper">
          {
            projects.map((project) => {
              return (
                <ProjectItem key={project.ID} project={project} onClick={onProjectClick} />
              )
            })
          }
        </div>
        {
          (isModalOpen) ? <ClientProjectModal type={type} onClose={onModalClose} isOpen={isModalOpen} project={clickedProject} /> : null
        }
    </div>
  );
};