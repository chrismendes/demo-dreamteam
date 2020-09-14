import React from 'react';
import { Link } from 'react-router-dom';
import './ProgressBar.scss';

const ProgressBar = (props) => {

  const progressBarSteps = props.steps.map((step, i) => 
    <li className={(i+1 === parseInt(props.active)) ? 'is-active' : ''} key={i}><Link to={step.link}>{step.title}</Link></li>
  );
  
  return (
    <ul className="progressbar">
      {progressBarSteps}
    </ul>
  );
};

export default ProgressBar;
