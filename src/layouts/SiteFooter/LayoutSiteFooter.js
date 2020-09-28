import React from 'react';
import './LayoutSiteFooter.scss';

const LayoutSiteFooter = (props) => (
    <footer className="l-sitefooter">
        <div className="l-container">
            {props.children}
        </div>
    </footer>
);

export default LayoutSiteFooter;