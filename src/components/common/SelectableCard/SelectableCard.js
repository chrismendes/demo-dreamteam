import React from 'react';
import './SelectableCard.scss';

const SelectableCard = (props) => (
  <article className="selectablecard">
    <img className="selectablecard__image" src={props.image} alt="" />
    <span className="selectablecard__title">{props.title}</span>
    <span className="selectablecard__description">{props.description}</span>
  </article>
);

export default SelectableCard;
