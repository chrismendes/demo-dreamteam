import React, { useState } from 'react';

import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';

import AppHeader from './components/common/AppHeader';
import FormationSelector from './components/FormationSelector';
import PlayerCatalogue from './components/PlayerCatalogue';

import UserTeamContext from './context/UserContext';
import formations from './data/formations';

const App = () => {

  const defaultUserTeam = {
    formation: formations[0],
    players: {
      'GK':  [],
      'DEF': [],
      'MID': [],
      'FWD': [] 
    }
  };
  const userTeamHook = useState(defaultUserTeam);

  return (
    <React.Fragment>

      <LayoutHeader>
        <AppHeader />
      </LayoutHeader>

      <UserTeamContext.Provider value={userTeamHook}>

        <LayoutBody>
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
