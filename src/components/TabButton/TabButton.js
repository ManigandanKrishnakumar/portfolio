import React from 'react';
import './TabButton.scss';

export default ({isSelected, tab, onClick}) => {
  return (
    <div className={`tab-button-container ${isSelected ? 'selected' : null}`} onClick={() => onClick(tab)}>
      <p className="button-text">
        {tab.name}
      </p>
    </div>
  );
};
