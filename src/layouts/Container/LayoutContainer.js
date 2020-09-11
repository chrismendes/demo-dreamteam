import React from 'react';
import './LayoutContainer.scss';

const LayoutContainer = (props) => (
    <div className="l-container">
        {props.children}
    </div>
);

export default LayoutContainer;
