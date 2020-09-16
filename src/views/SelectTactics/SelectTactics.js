import React, { useContext } from 'react';
// import { Redirect } from 'react-router-dom';

import AppConfigContext from '../../contexts/AppConfigContext';
// import UserSessionContext from '../../contexts/UserSessionContext';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';
import LayoutTwoColumns from '../../layouts/TwoColumns';
import LayoutTwoColumnsMain from '../../layouts/TwoColumnsMain';
import LayoutTwoColumnsSide from '../../layouts/TwoColumnsSide';

import ProgressBar from '../../components/common/ProgressBar';
import Pitch from '../../components/Pitch';
import TeamSheet from '../../components/TeamSheet';


const SelectTactics = () => {

  const appConfig = useContext(AppConfigContext);
  const progressBarSteps = appConfig.progressBarSteps;

  // const userSessionState = useContext(UserSessionContext);
  // const [userChecklist] = userSessionState.checklist;

  return (
    <React.Fragment>
      
      {/* {userChecklist[0] === false &&
        <Redirect to="/" />
      } */}

      <LayoutPageHeader>
        <ProgressBar steps={progressBarSteps} active="2" />
      </LayoutPageHeader>

      <LayoutSection>
        <p>Drag your players onto the pitch.</p>
      </LayoutSection>

      <LayoutSection>
        <LayoutTwoColumns>

          <LayoutTwoColumnsSide>
            <TeamSheet />
          </LayoutTwoColumnsSide>

          <LayoutTwoColumnsMain>
            <Pitch />
          </LayoutTwoColumnsMain>

        </LayoutTwoColumns>
      </LayoutSection>

    </React.Fragment>
  );
};

export default SelectTactics;
