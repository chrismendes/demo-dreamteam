import React, { useContext } from 'react';

import AppConfigContext from '../../contexts/AppConfigContext';
import UserSessionContext from '../../contexts/UserSessionContext';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';

import TaskStatus from '../../components/common/TaskStatus';
import ProgressBar from '../../components/common/ProgressBar';


const SaveTeam = () => {

  const appConfig = useContext(AppConfigContext);
  const userSession = useContext(UserSessionContext);
  const taskCompleteCriteria = () => [...userSession.checklist][0][0] === true;

  return (
    <React.Fragment>

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="3" completeCriteria={taskCompleteCriteria} />
        <ProgressBar steps={appConfig.progressBarSteps} active="3" />
      </LayoutPageHeader>

      <LayoutSection>
      </LayoutSection>

      <LayoutSection>
      </LayoutSection>

    </React.Fragment>
  );
};

export default SaveTeam;
