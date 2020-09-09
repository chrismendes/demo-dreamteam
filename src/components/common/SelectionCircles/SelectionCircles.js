import React from 'react';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './SelectionCircles.scss';

const SelectionCircles = (props) => {

  let circles = (() => {
    return Array.from(Array(parseInt(props.circles)), (_, i) => 
      <li className={i === props.active ? 'is-active': '' } key={i}>
        <span className="selectioncircles__circleoff material-icons">radio_button_unchecked</span>
        <span className="selectioncircles__circleon material-icons">check_circle</span>
      </li>
    );
  })();

  return (
    <ul className="selectioncircles">
      {circles}
    </ul>
  )
};

export default SelectionCircles;
