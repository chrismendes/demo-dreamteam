import React from 'react';
import './ProgressBar.scss';

const ProgressBar = (props) => {

  const progressBarSteps = props.steps.map((step, i) => 
    <li className={(i+1 === parseInt(props.active)) ? 'is-active' : ''} key={`pbstep_${i}`}>{step}</li>
  );
  
  return (
    <ul className="progressbar">
      {progressBarSteps}
    </ul>
  );
};

export default ProgressBar;
