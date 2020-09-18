import React, { useState, useContext, useEffect } from 'react';
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

  const tableCols = [ 'First Name', 'Formation' ];
  const [tableData, setTableData] = useState([]);
  const [pitchData, setPitchData] = useState([]);
  
  const [selectedTeam, setSelectedTeam] = useState(0);
 

  useEffect(() => {
    const fetchTeamData = async() => {
      const snapshot = await firestore.collection('teams').get();
      const rawData = snapshot.docs.map(doc => { return { ...doc.data() }; });

      const tableDataIn = [];
      const pitchDataIn = [];

      rawData.forEach((team) => {
        tableDataIn.push({ userName: team.userName, formation: team.formation.title });
        pitchDataIn.push({ players: team.players, formation: team.formation });
      });
      setTableData(tableDataIn);
      setPitchData(pitchDataIn);
    }
    fetchTeamData();
  }, []);


  return (
    <React.Fragment>

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="4" />
        <ProgressBar steps={appConfig.progressBarSteps} active="4" />
      </LayoutPageHeader>

      <LayoutSection altColourFirst="true">
        <LayoutTwoColumns>

          { (tableData.length && pitchData.length) ?
            (
              <React.Fragment>
                <LayoutTwoColumnsSide>
                  <SelectableTable rows={tableData} cols={tableCols} updateFn={setSelectedTeam} />
                </LayoutTwoColumnsSide>

                <LayoutTwoColumnsMain>
                  <Pitch players={pitchData[selectedTeam].players} formation={pitchData[selectedTeam].formation} readonly="true"/>
                </LayoutTwoColumnsMain>
              </React.Fragment>
            ) : ''
          }

        </LayoutTwoColumns>
      </LayoutSection>

    </React.Fragment>
  );
};

export default CompareTeamsView;
