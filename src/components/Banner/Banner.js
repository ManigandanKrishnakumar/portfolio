import React from 'react';
import './Banner.scss';
import {BANNER_CONTENT} from '../../constants/content/bannerContent';
import DevMemoji from '../DevMemoji/DevMemoji';

export default () => {
  return (
    // START: BANNER
    <div className="banner-container">
      <h1 className="hello-message">{BANNER_CONTENT.HELLO_MSG}</h1>
      <p className="motto">{BANNER_CONTENT.MOTTO}</p>
      <DevMemoji />
    </div>
    // END: BANNER
  );
};
