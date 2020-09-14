import React from 'react';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';

import ProgressBar from '../../components/common/ProgressBar';
import FormationSelector from '../../components/FormationSelector';
import PlayerCatalogue from '../../components/PlayerCatalogue';

// (TODO: Move)
const appSteps = [ 'Pick Your Players', 'Select Your Tactics', 'Save Your Team', 'Compare Teams' ];

const PickPlayers = () => {
  return (
    <React.Fragment>

      <LayoutPageHeader>
        <ProgressBar steps={appSteps} active="1" />
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
