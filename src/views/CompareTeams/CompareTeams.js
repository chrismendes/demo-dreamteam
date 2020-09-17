import React, { useContext } from 'react';

import AppConfigContext from '../../contexts/AppConfigContext';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';

import TaskStatus from '../../components/common/TaskStatus';
import ProgressBar from '../../components/common/ProgressBar';


const CompareTeamsView = () => {

  const appConfig = useContext(AppConfigContext);

  return (
    <React.Fragment>

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="4" />
        <ProgressBar steps={appConfig.progressBarSteps} active="4" />
      </LayoutPageHeader>

      <LayoutSection>
      </LayoutSection>

      <LayoutSection>
      </LayoutSection>

    </React.Fragment>
  );
};

export default CompareTeamsView;
