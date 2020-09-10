import React from 'react';
import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';
import LayoutContainer from './layouts/Container';
import AppHeader from './components/common/AppHeader';
import FormationSelect from './components/FormationSelect';
import PlayerCatalogue from './components/PlayerCatalogue';

function App() {
  return (
    <React.Fragment>

      <LayoutHeader>
        <AppHeader />
      </LayoutHeader>

      <LayoutBody>
        <LayoutSection>
          <LayoutContainer>

            <FormationSelect />

          </LayoutContainer>
        </LayoutSection>
        <LayoutSection>
          <LayoutContainer>

            <PlayerCatalogue />

          </LayoutContainer>
        </LayoutSection>
      </LayoutBody>

    </React.Fragment>
  );
}

export default App;
