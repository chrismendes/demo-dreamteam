import React, { useState } from 'react';

import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutPageHeader from './layouts/PageHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';

import AppHeader from './components/common/AppHeader';
import FormationSelector from './components/FormationSelector';
import PlayerCatalogue from './components/PlayerCatalogue';
import ProgressBar from './components/common/ProgressBar';

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


  return (
    <React.Fragment>

      <LayoutHeader>
        <AppHeader />
      </LayoutHeader>

      <UserTeamContext.Provider value={userState}>

        <LayoutBody>
          <LayoutPageHeader>

            <ProgressBar />

          </LayoutPageHeader>
          <LayoutSection>

            <FormationSelector />

          </LayoutSection>
          <LayoutSection>

            <PlayerCatalogue />

          </LayoutSection>
        </LayoutBody>

      </UserTeamContext.Provider>

    </React.Fragment>
  );
}

export default App;
