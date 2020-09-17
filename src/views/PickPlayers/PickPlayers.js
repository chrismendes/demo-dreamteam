import React, { useContext } from 'react';

import AppConfigContext from '../../contexts/AppConfigContext';
import UserSessionContext from '../../contexts/UserSessionContext';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';

import TaskStatus from '../../components/common/TaskStatus';
import ProgressBar from '../../components/common/ProgressBar';
import FormationSelector from '../../components/FormationSelector';
import PlayerCatalogue from '../../components/PlayerCatalogue';


const PickPlayers = () => {

  const appConfig = useContext(AppConfigContext);
  const userSession = useContext(UserSessionContext);
  const taskCompleteCriteria = () => [...userSession.checklist][0][0] === true;

  return (
    <React.Fragment>

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="1" completeCriteria={taskCompleteCriteria} />
        <ProgressBar steps={appConfig.progressBarSteps} active="1" />
      </LayoutPageHeader>

      <LayoutSection>
        <FormationSelector />
      </LayoutSection>

      <LayoutSection>
        <PlayerCatalogue />
      </LayoutSection>

    </React.Fragment>
  );
};

export default PickPlayers;
