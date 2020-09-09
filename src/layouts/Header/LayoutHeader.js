import React from 'react';
import './LayoutHeader.scss';

const LayoutHeader = (props) => (
    <header className="l-header">
        {props.children}
    </header>
);

export default LayoutHeader;