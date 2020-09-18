import React, { useState, useContext } from 'react';
import { firestore } from '../../firebase';

import AppConfigContext from '../../contexts/AppConfigContext';

import LayoutPageHeader from '../../layouts/PageHeader';
import LayoutSection from '../../layouts/Section';
import LayoutTwoColumns from '../../layouts/TwoColumns';
import LayoutTwoColumnsMain from '../../layouts/TwoColumnsMain';
import LayoutTwoColumnsSide from '../../layouts/TwoColumnsSide';

import TaskStatus from '../../components/common/TaskStatus';
import ProgressBar from '../../components/common/ProgressBar';
import SelectableTable from '../../components/common/SelectableTable';
import Pitch from '../../components/Pitch';
// import SaveForm from '../../components/SaveForm';


const CompareTeamsView = () => {

  const appConfig = useContext(AppConfigContext);
  const [userTeamsTable, setUserTeamsTable] = useState([]);

  const fetchUsers = async () => {
    const snapshot = await firestore.collection('teams').get();
    const teams = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() }; });
// console.log(teams);
    setUserTeamsTable(teams);
  };
  fetchUsers();

  return (
    <React.Fragment>

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="4" />
        <ProgressBar steps={appConfig.progressBarSteps} active="4" />
      </LayoutPageHeader>

      <LayoutSection altColourFirst="true">
        <LayoutTwoColumns>

          <LayoutTwoColumnsSide>
            <SelectableTable />
          </LayoutTwoColumnsSide>

          <LayoutTwoColumnsMain>
            <Pitch team={userTeamsTable} formation={'442d'} readonly="true"/>
          </LayoutTwoColumnsMain>

        </LayoutTwoColumns>
      </LayoutSection>

    </React.Fragment>
  );
};

export default CompareTeamsView;
