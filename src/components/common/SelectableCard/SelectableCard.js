import React from 'react';
import './SelectableCard.scss';
import './SelectableCardHorizontal.scss';

const SelectableCard = (props) => {

  const updateAppState = props.updateFn;

  const toggleSelection = () => {
    if(updateAppState) updateAppState(props.id);
  };

  const applicableStateClasses = () => {
    let classes = [];

    if(props.selected === true) classes.push('is-selected');
    if(props.approved === true) classes.push('is-approved');
    if(props.error === true)    classes.push('is-error');
    if(props.disabled === true) classes.push('is-disabled');

    return classes.join(' ');
  };

  return (
    <article
      onClick={toggleSelection}
      className={`selectablecard ${applicableStateClasses()} ${(props.horizontal === "true") ? 'selectablecard-horizontal' : ''}`}
      {...props.dragAndDropConfig}
    >
      <img className="selectablecard__image" src={props.image} alt="" />
      <span className="selectablecard__title">{props.title}</span>
      <span className="selectablecard__description">{props.description}</span>
    </article>
  );
};

export default SelectableCard;
