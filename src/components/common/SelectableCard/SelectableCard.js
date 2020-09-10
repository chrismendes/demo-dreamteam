import React, { useState } from 'react';
import './SelectableCard.scss';

const SelectableCard = (props) => {

  const [isSelected, setSelected] = useState(false);
  // const [isDisabled, setDisabled] = useState(false);
  // const [isValidated, setValidated] = useState(false);
  // const [isInvalidated, setInvalidated] = useState(false);
  const updateAppState = props.updateFn;

  const toggleSelection = () => {
console.log(props.id);
    setSelected(!isSelected);
    if(updateAppState) updateAppState(props.id);
  };

  return (
    <article onClick={toggleSelection} className={`selectablecard ${isSelected ? "is-selected" : ""}`}>
      <img className="selectablecard__image" src={props.image} alt="" />
      <span className="selectablecard__title">{props.title}</span>
      <span className="selectablecard__description">{props.description}</span>
    </article>
  );
};

export default SelectableCard;
