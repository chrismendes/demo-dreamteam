import React from 'react';
import { Link } from 'react-router-dom';
import './ProgressBar.scss';

const ProgressBar = (props) => {

  const markAsDone = (!!props.done);

  const progressBarSteps = props.steps.map((step, i) => 
    <li className={(i+1 === parseInt(props.active) && !markAsDone) ? 'is-active' : ''} number={i+1} key={i}><Link to={step.link}>{step.title}</Link></li>
  );
  
  return (
    <ul className="progressbar">
      {progressBarSteps}
    </ul>
  );
};

export default ProgressBar;
