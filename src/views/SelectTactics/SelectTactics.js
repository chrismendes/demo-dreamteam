import React from 'react';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';
import LayoutTwoColumns from '../../layouts/TwoColumns';
import LayoutTwoColumnsMain from '../../layouts/TwoColumnsMain';
import LayoutTwoColumnsSide from '../../layouts/TwoColumnsSide';

import ProgressBar from '../../components/common/ProgressBar';
import Pitch from '../../components/Pitch';
import TeamSheet from '../../components/TeamSheet';

// (TODO: Move)
const appSteps = [ 'Pick Your Players', 'Select Your Tactics', 'Save Your Team', 'Compare Teams' ];

const SelectTactics = () => {
  return (
    <React.Fragment>

      <LayoutPageHeader>
        <ProgressBar steps={appSteps} active="2" />
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
