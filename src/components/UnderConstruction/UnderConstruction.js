import React from 'react';
import './UnderConstruction.scss';

import {IoIosConstruct} from 'react-icons/io';
import devImage from '../../assets/mani.png';

export default () => {
  return (
    <div className="container">
      <div class="content">
        <img src={devImage} className="dev-image" alt="logo" />
        <h1> Hi ! I'm Manigandan. </h1>
        <IoIosConstruct className="construction-icon" />
        <p className="description">
          This site is under construction. Please Visit back Later.
        </p>
      </div>
    </div>
  );
};
