import React from 'react';
import SelectionCircles from '../SelectionCircles';
import './OptionSelector.scss';

const OptionSelector = (props) => {

  const options = props.options;
  const buttonLabel = (props.button) ? props.button : 'Change Selection';
  const updateState = props.updateState;
  let selection = props.state;

  const optionsValid = () => { // (Running on each render) (useEffect?)
    return true;
  };

  const changeSelection = () => {
    selection++;
    updateState(selection);
    if (selection >= options.length) updateState(0);
  };


  const optionImagesListItems = options.map((n, i) =>
    <li className={i === selection ? 'is-active': '' } key={n.id}>
      <img src={n.image} alt={n.label} width="300" height="375" />
    </li>
  );
  const optionImages = (
    <ul className="optionselector__images">
      {optionImagesListItems}
    </ul>
  );


  if(optionsValid() === false) {
    console.error('Option data for OptionSelector missing mandatory properties.');
    return <span>False</span>;
  }
  return (
    <div className="optionselector" data-testid="OptionSelector">
      {optionImages}
      <div className="optionselector__controls">
        <span className="optionselector__selection">{options[selection].label}</span>
        <button onClick={changeSelection} className="optionselector__button">{buttonLabel}</button>
        <SelectionCircles circles={options.length} active={selection} />
      </div>
    </div>
  );

};

export default OptionSelector;
