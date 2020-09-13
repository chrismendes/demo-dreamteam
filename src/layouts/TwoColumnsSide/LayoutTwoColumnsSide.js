import React from 'react';
import './LayoutTwoColumnsSide.scss';

const LayoutTwoColumnsSide = (props) => (
    <div className="l-twocolumnsside third">
        {props.children}
    </div>
);

export default LayoutTwoColumnsSide;
