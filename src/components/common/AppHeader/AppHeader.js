import React from 'react';
import './AppHeader.scss';

const AppHeader = () => (
  <div className="appheader">
    <span className="appheader__warning">App is not responsive. Desktop only.</span>
    <h1 className="appheader__title">Football Dream Team - Built with React</h1>
    <a className="appheader__github" href="https://github.com/chrismendes/app-dreamteam-react" target="_blank" rel="noopener noreferrer">
      <img src="/github.png" width="32" height="32" alt="GitHub" />
      <span>Click for source code on GitHub</span>
    </a>
  </div>
);

export default AppHeader;
