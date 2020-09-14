import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'picnic/src/picnic.scss';
import 'material-icons/iconfont/material-icons.scss';

import LayoutSiteHeader from './layouts/SiteHeader';
import LayoutBody from './layouts/Body';

import AppHeader from './components/common/AppHeader';
import PickPlayersView from './views/PickPlayers';
import SelectTacticsView from './views/SelectTactics';
import UserTeamContext from './context/UserContext';
import formations from './data/formations';


const App = () => {

  // (TODO: Move)
  const defaultUserFormation = formations[0];
  const defaultUserPlayers = { 'GK':  [], 'DEF': [], 'MID': [], 'FWD': [] };
  const appChecklist = { 'GK': 0,  'DEF': 0,  'MID': 0,  'FWD': 0 };
  const userState = {
    formation: useState(defaultUserFormation),
    players:   useState(defaultUserPlayers),
    checklist: useState(appChecklist)
  };

  return (
    <Router>

      <LayoutSiteHeader>
        <AppHeader />
      </LayoutSiteHeader>

      <LayoutBody>
        <UserTeamContext.Provider value={userState}>

          <Route exact path ="/">
            <PickPlayersView />
          </Route>

          <Route exact path ="/tactics">
            <SelectTacticsView />
          </Route>

        </UserTeamContext.Provider>
      </LayoutBody>

    </Router>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
