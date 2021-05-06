import React, {useState} from 'react';
import './RecentWork.scss';
import TabBar from '../TabBar/TabBar';
import {PROJECT_TABS} from '../../constants/app-constants';
import ProjectsList from '../ProjectsList/ProjectsList';
import {PROJECTS} from '../../constants/content/projectsContent';

export default () => {
  const [tab, setTab] = useState(PROJECT_TABS[1]);
  return (
    <div className="recent-work-container">
      <TabBar selectedTab={tab} onTabSelect={setTab} />
      {tab.id === 'client_projects' ? (
        <ProjectsList type={tab.id} projects={PROJECTS.CLIENT_PROJECTS} />
      ) : (
        <ProjectsList type={tab.id} projects={PROJECTS.OPEN_SOURCE} />
      )}
    </div>
  );
};
