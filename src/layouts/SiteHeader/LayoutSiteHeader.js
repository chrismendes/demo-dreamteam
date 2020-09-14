import React from 'react';
import './LayoutSiteHeader.scss';

const LayoutSiteHeader = (props) => (
    <header className="l-siteheader">
        {props.children}
    </header>
);

export default LayoutSiteHeader;