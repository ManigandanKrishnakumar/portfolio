import React from 'react';
import  './ClientProjectModal.scss';
import Modal from 'react-modal';
import {RiCloseLine} from 'react-icons/ri';
import {MdCenterFocusWeak} from 'react-icons/md'
import { getIcon } from '../../services/IconService';
import { PROJECT_CATAGORY } from '../../constants/content/projectsContent';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

Modal.setAppElement('#root');

const PROJECT_CATAGORY_MAP = {
  [PROJECT_CATAGORY.HYBRID] : 'Hybrid Mobile and Web Application',
  [PROJECT_CATAGORY.WEB]: 'Web Application',
  [PROJECT_CATAGORY.MOBILE] : 'Mobile Application'
}

export default ({project, onClose, isOpen, type}) => {

  const Icon = getIcon(project.ICON.FAMILY, project.ICON.NAME);

  const [magnify, setMagnify] = useState(false);
  const onMagnify = () => {
      setMagnify(prev => !prev);
  }
  return(
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} >
      <div className="close-button-wrapper" onClick={() => onClose()}>
        <RiCloseLine className="close-button" />
      </div>
      <div className={`modal-content-container ${project.CATAGORY === PROJECT_CATAGORY.WEB ? 'web' : ''} ${type !== 'client_projects' ? 'open-source' : ''}`}>
        {
          (!project.IMAGES.length) ? 
            (
              <div className="project-bar">
                <Icon className="project-icon"/>
              </div>
            ) : (
              <div className="images-bar">
                <Carousel renderThumbs={()=>null}>
                  {
                    project.IMAGES.map((img, i) => {
                      return(
                        <img alt="Screenshot of the project" key={i} src={img} height="100%" />
                      )
                    })
                  }
                </Carousel>
                <MdCenterFocusWeak className="image-full-screen" onClick={onMagnify}/>
              </div>
            )
        }
        <div className={`project-details ${project.CATAGORY} ${magnify ? 'shrink' : ''}`}>
          <h1 className="project-name">{project.NAME}</h1>
          <h3 className="project-catagory">{PROJECT_CATAGORY_MAP[project.CATAGORY]}</h3>
          <div className="project-desc">
            <p className="label">Description</p>
            <p>{project.DESC}</p>
          </div>
          
          <div className="tech-stack">
            <p><span className="label">Tech Stack : </span>
            {project.TECH_STACK}</p>
          </div>
          {
            project.REPO ? 
              (
                <div className="repo-url">
                  <p>
                    <span className="label">Repository : </span>
                    <a className="link" href={project.REPO} target="_blank">
                      {project.REPO}
                    </a> 
                  </p>
                </div>
              ): null
          }

{
            project.DEMO ? 
              (
                <div className="repo-url">
                  <p>
                    <span className="label">Demo Site : </span>
                    <a className="link" href={project.DEMO} target="_blank">
                      {project.DEMO}
                    </a> 
                  </p>
                </div>
              ): null
          }
          
          
        </div>
   
        
      </div>
    </Modal>
  )
};


const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--main-bg-color)',
    borderRadius: '15px',
    height: '70%',
    width: '60%',
    padding: '0',
    animation: 'fadeIn 1s',
  },
};
