import React, { useContext } from 'react';

import AppConfigContext from '../../contexts/AppConfigContext';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';

import ProgressBar from '../../components/common/ProgressBar';
import FormationSelector from '../../components/FormationSelector';
import PlayerCatalogue from '../../components/PlayerCatalogue';


const PickPlayers = () => {

  const appConfig = useContext(AppConfigContext);
  const progressBarSteps = appConfig.progressBarSteps;

  return (
    <React.Fragment>

      <LayoutPageHeader>
        <ProgressBar steps={progressBarSteps} active="1" />
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
