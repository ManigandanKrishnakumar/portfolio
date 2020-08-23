import React from 'react';
import './UnderConstruction.scss';

import {IoIosConstruct} from 'react-icons/io';
import devImage from '../../assets/dev-memoji.png';

export default () => {
  return (
    <div className="container">
      <div class="content">
        <IoIosConstruct className="construction-icon" />
        <p className="description">
          This site is under construction. Please Visit back Later.
        </p>
      </div>
    </div>
  );
};
