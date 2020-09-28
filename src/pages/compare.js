import React, { useState, useContext, useEffect } from 'react';
import { firestore } from '../firebase';

import AppConfigContext from '../contexts/AppConfigContext';

import LayoutPageHeader from '../layouts/PageHeader';
import LayoutSection from '../layouts/Section';
import LayoutTwoColumns from '../layouts/TwoColumns';
import LayoutTwoColumnsMain from '../layouts/TwoColumnsMain';
import LayoutTwoColumnsSide from '../layouts/TwoColumnsSide';

import TaskStatus from '../components/common/TaskStatus';
import ProgressBar from '../components/common/ProgressBar';
import SelectableTable from '../components/common/SelectableTable';
import Pitch from '../components/Pitch';


const CompareTeamsPage = () => {

  const appConfig = useContext(AppConfigContext);

  const tableCols = [ 'User Name', 'Date' ];
  const [tableData, setTableData] = useState([]);
  const [pitchData, setPitchData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(0);

  const sortTeamsByDate = (a, b) => {
    if(a.date.seconds < b.date.seconds) return 1;
    if(a.date.seconds > b.date.seconds) return -1;
    if(a.date.seconds === b.date.seconds) return 0;
  };

  useEffect(() => {
    const fetchTeamData = async() => {
      const snapshot = await firestore.collection('teams').get();
      const rawData = snapshot.docs.map(doc => { return { ...doc.data() }; });

      const tableDataIn = [];
      const pitchDataIn = [];

      rawData.sort(sortTeamsByDate);
      
      rawData.forEach((team) => {
        tableDataIn.push({ userName: team.userName, date: team.date });
        pitchDataIn.push({ players: team.players, formation: team.formation });
      });
      setTableData(tableDataIn);
      setPitchData(pitchDataIn);
    }
    fetchTeamData();
  }, []);


  return (
    <div className="p-compareteams">

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="4" />
        <ProgressBar steps={appConfig.progressBarSteps} active="4" done="true" />
      </LayoutPageHeader>

      <LayoutSection altColourFirst="true">
        <LayoutTwoColumns>

          <React.Fragment>
            <LayoutTwoColumnsSide>
              {
                (tableData.length && pitchData.length) ?
                  <SelectableTable rows={tableData} cols={tableCols} updateFn={setSelectedTeam} /> : <SelectableTable />
              }
            </LayoutTwoColumnsSide>
            <LayoutTwoColumnsMain>
              {
                (tableData.length && pitchData.length) ?
                  <Pitch players={pitchData[selectedTeam].players} formation={pitchData[selectedTeam].formation} readonly="true"/> : <Pitch />
              }                  
            </LayoutTwoColumnsMain>
          </React.Fragment>

        </LayoutTwoColumns>
      </LayoutSection>

    </div>
  );
};

export default CompareTeamsPage;
