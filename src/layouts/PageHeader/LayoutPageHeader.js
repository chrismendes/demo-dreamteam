import React from 'react';
import LayoutContainer from '../Container';
import './LayoutPageHeader.scss';

const LayoutPageHeader = (props) => (
  <header className="l-pageheader">
    <LayoutContainer>
      {props.children}
    </LayoutContainer>
  </header>
);

export default LayoutPageHeader;
