import React from 'react';
import LayoutContainer from '../Container';
import './LayoutSection.scss';

const LayoutSection = (props) => (
    <div className="l-section flex one">
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    </div>
);

export default LayoutSection;
