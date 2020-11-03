import React from 'react';
import { PROJECT_TABS } from '../../constants/app-constants';
import TabButton from '../TabButton/TabButton';
import './TabBar.scss';

export default ({selectedTab, onTabSelect}) => {
  return (
    <div className="tab-bar-container">
          {
            PROJECT_TABS.map((tab, index) => {
              return(<TabButton key={index} tab={tab} isSelected={selectedTab.id === tab.id} onClick={onTabSelect}/>);
            })
          }
      
    </div>
  );
};
