import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AppConfigContext from '../contexts/AppConfigContext';
import UserSessionContext from '../contexts/UserSessionContext';

import LayoutPageHeader from '../layouts/PageHeader';
import LayoutSection from '../layouts/Section';
import LayoutTwoColumns from '../layouts/TwoColumns';
import LayoutTwoColumnsMain from '../layouts/TwoColumnsMain';
import LayoutTwoColumnsSide from '../layouts/TwoColumnsSide';

import TaskStatus from '../components/common/TaskStatus';
import ProgressBar from '../components/common/ProgressBar';
import Pitch from '../components/Pitch';
import TeamSheet from '../components/TeamSheet';


const SelectTacticsPage = () => {

  const appConfig = useContext(AppConfigContext);
  const userSessionState = useContext(UserSessionContext);

  const [userPlayers, setUserPlayers] = userSessionState.players;
  const [userFormation] = userSessionState.formation;
  const taskCompleteCriteria = () => [...userSessionState.checklist][0][1] === true;

  return (
    <React.Fragment>
      
      {userSessionState.checklist[0][0] === false &&
        <Redirect to="/" />
      }

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="2" completeCriteria={taskCompleteCriteria} />
        <ProgressBar steps={appConfig.progressBarSteps} active="2" />
      </LayoutPageHeader>

      <LayoutSection altColourFirst="true">
        <LayoutTwoColumns>

          <LayoutTwoColumnsSide>
            <TeamSheet />
          </LayoutTwoColumnsSide>

          <LayoutTwoColumnsMain>
            <Pitch players={userPlayers} update={setUserPlayers} formation={userFormation} />
          </LayoutTwoColumnsMain>

        </LayoutTwoColumns>
      </LayoutSection>

    </React.Fragment>
  );
};

export default SelectTacticsPage;
