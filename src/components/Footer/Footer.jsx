import React from 'react';
import Logo from '../Logo/Logo';
import './FooterStyles.scss';

import {GrLinkedinOption} from 'react-icons/gr';
import {FiGithub} from 'react-icons/fi';
import {IoMdMail} from 'react-icons/io';
import {MdPhone} from 'react-icons/md';

const Footer = () => {
  return(
    <div className="footer-container">
      <Logo className='logo'/>
      <h2 className="quote">Eat. Sleep. Code. Repeat</h2>
      <div className="contact-buttons">
        
        <a href="https://www.linkedin.com/in/manigandan-krishnakumar-6a167a166/">
          <div className="button">
            <GrLinkedinOption className="icon" />
          </div>
        </a>

        <a href="https://github.com/ManigandanKrishnakumar/">
          <div className="button">
            <FiGithub className="icon" />
          </div>
        </a>

        <a href="mailto:matt@pendeavor.com">
          <div className="button">
            <IoMdMail className="icon" />
          </div>
        </a>

        <a href="tel:+919994655540">
          <div className="button">
            <MdPhone className="icon" />
          </div>
        </a>
      </div>

      <p className="contact-info">
        manigandan.krishnakumarn@gmail.com
      </p>
      
    </div>
  )
}

export default Footer;