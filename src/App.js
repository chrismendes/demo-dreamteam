import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutPageHeader from './layouts/PageHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';
import LayoutTwoColumns from './layouts/TwoColumns';
import LayoutTwoColumnsMain from './layouts/TwoColumnsMain';
import LayoutTwoColumnsSide from './layouts/TwoColumnsSide';

import AppHeader from './components/common/AppHeader';
import ProgressBar from './components/common/ProgressBar';
import FormationSelector from './components/FormationSelector';
import PlayerCatalogue from './components/PlayerCatalogue';
import Pitch from './components/Pitch';

import UserTeamContext from './context/UserContext';
import formations from './data/formations';

const App = () => {

  const defaultUserFormation = formations[0];
  const defaultUserPlayers = { 'GK':  [], 'DEF': [], 'MID': [], 'FWD': [] };
  const appChecklist = { 'GK': 0,  'DEF': 0,  'MID': 0,  'FWD': 0 };
  const userState = {
    formation: useState(defaultUserFormation),
    players:   useState(defaultUserPlayers),
    checklist: useState(appChecklist)
  };
  const appSteps = [ 'Pick Your Players', 'Select Tactics', 'Compare Teams' ];


  return (
    <Router>

      <LayoutHeader>
        <AppHeader />
      </LayoutHeader>

      <UserTeamContext.Provider value={userState}>

        <LayoutBody>

          <Route exact path ="/">
            <LayoutPageHeader>

              <ProgressBar steps={appSteps} active="1" />

            </LayoutPageHeader>
            <LayoutSection>

              <FormationSelector />

            </LayoutSection>
            <LayoutSection>

              <PlayerCatalogue />

            </LayoutSection>
          </Route>


          <Route exact path ="/tactics">
            <LayoutPageHeader>

              <ProgressBar steps={appSteps} active="2" />

            </LayoutPageHeader>
            <LayoutSection>

              <LayoutTwoColumns>
                <LayoutTwoColumnsSide>

                  <p>Sidebar</p>

                </LayoutTwoColumnsSide>
                <LayoutTwoColumnsMain>

                  <Pitch />

                  </LayoutTwoColumnsMain>
                </LayoutTwoColumns>

            </LayoutSection>
          </Route>

        </LayoutBody>

      </UserTeamContext.Provider>

    </Router>
  );
}

export default App;
