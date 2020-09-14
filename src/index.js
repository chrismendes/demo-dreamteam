import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import 'picnic/src/picnic.scss';
import 'material-icons/iconfont/material-icons.scss';

import LayoutSiteHeader from './layouts/SiteHeader';
import LayoutBody from './layouts/Body';

import AppHeader from './components/common/AppHeader';

import AppConfigContext from './contexts/AppConfigContext';
import progressBarSteps from './contexts/appConfig';
import UserSessionContext from './contexts/UserSessionContext';
import userSessionDefaults from './contexts/userSessionDefaults';


const App = () => {

  const appConfig = {
    progressBarSteps: progressBarSteps
  };
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
        <AppConfigContext.Provider value={appConfig}>
          <UserSessionContext.Provider value={userSessionState}>

            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact
                  component={route.component}
                />
              ))}
            </Switch>

          </UserSessionContext.Provider>
        </AppConfigContext.Provider>
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
