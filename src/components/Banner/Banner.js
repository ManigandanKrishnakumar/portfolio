import React from 'react';
import './Banner.scss';
import {BANNER_CONTENT} from '../../constants/content/bannerContent';
import DevMemoji from '../DevMemoji/DevMemoji';

export default () => {
  return (
    <div  id="banner" className="banner-container">
      <h1 className="hello-message">{BANNER_CONTENT.HELLO_MSG}</h1>
      <h2 className="role-message"> {BANNER_CONTENT.ROLE_MSG}</h2>
      <p className="motto">{BANNER_CONTENT.MOTTO}</p>
      <DevMemoji />
    </div>
  );
};
