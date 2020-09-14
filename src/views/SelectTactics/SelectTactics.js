import React, { useContext } from 'react';

import AppConfigContext from '../../contexts/AppConfigContext';

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

  return (
    <React.Fragment>

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
