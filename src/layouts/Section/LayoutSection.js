import React from 'react';

import './LayoutSection.scss';

const LayoutSection = (props) => (
    <div className="l-section flex one">
        {props.children}
    </div>
);

export default LayoutSection;