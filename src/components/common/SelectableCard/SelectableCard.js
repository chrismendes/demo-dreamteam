import React from 'react';
import './SelectableCard.scss';

const SelectableCard = (props) => {

  const updateAppState = props.updateFn;

  const toggleSelection = () => {
    if(updateAppState) updateAppState(props.id);
  };

  const stateClasses = {
    selected: 'is-selected',
    approved: 'is-approved',
    error:    'is-error',
    disabled: 'is-disabled'
  };

  const applicableStateClasses = () => {
    let classes = '';
    for(const [key, value] of Object.entries(props.status)) {
      if(value === true) classes += ` ${stateClasses[key]}`;
    }
    return classes;
  };

  return (
    <article onClick={toggleSelection} className={`selectablecard ${applicableStateClasses()}`}>
      <img className="selectablecard__image" src={props.image} alt="" />
      <span className="selectablecard__title">{props.title}</span>
      <span className="selectablecard__description">{props.description}</span>
    </article>
  );
};

export default SelectableCard;
