import React from 'react';

import './LayoutBody.scss';

const LayoutBody = (props) => (
    <div className="l-body flex one">
        {props.children}
    </div>
);

export default LayoutBody;