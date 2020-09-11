import React, { useState } from 'react';
import './SelectableCard.scss';

const SelectableCard = (props) => {

  const updateAppState = props.updateFn;

  const toggleSelection = () => {
    if(updateAppState) updateAppState(props.id);
  };

  return (
    <article onClick={toggleSelection} className={`selectablecard ${props.stateClass}`}>
      <img className="selectablecard__image" src={props.image} alt="" />
      <span className="selectablecard__title">{props.title}</span>
      <span className="selectablecard__description">{props.description}</span>
    </article>
  );
};

export default SelectableCard;
