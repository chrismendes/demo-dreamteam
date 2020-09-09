import React from 'react';
import LayoutHeader from './layouts/Header/LayoutHeader';
import LayoutBody from './layouts/Body';
import LayoutSection from './layouts/Section';
import AppHeader from './components/common/AppHeader';
import FormationSelect from './components/FormationSelect';

function App() {
  return (
    <React.Fragment>

      <LayoutHeader>
        <AppHeader />
      </LayoutHeader>

      <LayoutBody>
        <LayoutSection>
          <FormationSelect />
        </LayoutSection>
        <LayoutSection>
          
        </LayoutSection>
      </LayoutBody>

    </React.Fragment>
  );
}

export default App;
