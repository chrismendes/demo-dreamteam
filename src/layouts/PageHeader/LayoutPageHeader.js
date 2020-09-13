import React from 'react';
import './LayoutPageHeader.scss';

const LayoutPageHeader = (props) => (
    <header className="l-pageheader">
        {props.children}
    </header>
);

export default LayoutPageHeader;