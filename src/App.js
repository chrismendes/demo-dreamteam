import React, { useState } from 'react';

import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';
import LayoutContainer from './layouts/Container';

import AppHeader from './components/common/AppHeader';
import FormationSelector from './components/FormationSelector';
import PlayerSelector from './components/PlayerSelector';

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
            <LayoutContainer>

              <FormationSelector />

            </LayoutContainer>
          </LayoutSection>
          <LayoutSection>
            <LayoutContainer>

              <PlayerSelector />

            </LayoutContainer>
          </LayoutSection>
        </LayoutBody>

      </UserTeamContext.Provider>

    </React.Fragment>
  );
}

export default App;
