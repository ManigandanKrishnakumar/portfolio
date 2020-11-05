import React from 'react';
import  './ClientProjectModal.scss';
import Modal from 'react-modal';
import {RiCloseLine} from 'react-icons/ri';
import { getIcon } from '../../services/IconService';
import { PROJECT_CATAGORY } from '../../constants/content/projectsContent';

Modal.setAppElement('#root');

const PROJECT_CATAGORY_MAP = {
  [PROJECT_CATAGORY.HYBRID] : 'Hybrid Mobile and Web Application',
  [PROJECT_CATAGORY.WEB]: 'Web Application',
  [PROJECT_CATAGORY.MOBILE] : 'Mobile Application'
}

export default ({project, onClose, isOpen, type}) => {
  const Icon = getIcon(project.ICON.FAMILY, project.ICON.NAME);
  return(
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} >
      <div className="close-button-wrapper" onClick={() => onClose()}>
        <RiCloseLine className="close-button" />
      </div>
      <div className="modal-content-container">
        {
          (type === 'client_projects') ? 

          (<>
            <div className="project-bar">
              <Icon className="project-icon"/>
            </div>
            <div className="project-details">
              <h1>{project.NAME}</h1>
              <h3 className="project-catagory">{PROJECT_CATAGORY_MAP[project.CATAGORY]}</h3>
              <div className="project-desc">
                <h4></h4>
              </div>
            </div>
           </>
          ) : null

        }
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
