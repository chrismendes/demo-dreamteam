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

import UserSessionContext from './session/UserSessionContext';
import userSessionDefaults from './session/userSessionDefaults';


const App = () => {

  const userSessionState = {
    checklist: useState(userSessionDefaults.appProgress),
    formation: useState(userSessionDefaults.formation),
    players:   useState(userSessionDefaults.players)
  };

  return (
    <Router>

      <LayoutSiteHeader>
        <AppHeader />
      </LayoutSiteHeader>

      <LayoutBody>
        <UserSessionContext.Provider value={userSessionState}>

          <Route exact path ="/">
            <PickPlayersView />
          </Route>

          <Route exact path ="/tactics">
            <SelectTacticsView />
          </Route>

        </UserSessionContext.Provider>
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
