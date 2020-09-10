import React from 'react';
import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';
import LayoutContainer from './layouts/Container';
import AppHeader from './components/common/AppHeader';
import FormationSelector from './components/FormationSelector';
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

            <FormationSelector />

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
