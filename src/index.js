import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './pages/_routes';
import 'picnic/src/picnic.scss';
import 'material-icons/iconfont/material-icons.scss';

import LayoutSiteHeader from './layouts/SiteHeader';
import LayoutBody from './layouts/Body';

import AppHeader from './components/common/AppHeader';

import UserSession from './utils/usersession';
import AppConfigContext from './contexts/AppConfigContext';
import appConfig from './contexts/appConfig';
import UserSessionContext from './contexts/UserSessionContext';

const App = () => {

  const userSession = new UserSession();
  const userSessionState = {
    checklist:  useState(userSession.getProp('checklist')),
    formation:  useState(userSession.getProp('formation')),
    players:    useState(userSession.getProp('players')),
    userName:   useState(userSession.getProp('userName')),
    dbRef:      useState(userSession.getProp('dbRef')),
    dataString: useState(userSession.getProp('dataString'))
  };
  useEffect(() => {
    userSession.updateLocalStorage(userSessionState);
  }, [userSession, userSessionState]);

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
