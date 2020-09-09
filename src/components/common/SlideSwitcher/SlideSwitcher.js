import React from 'react';
import SelectionCircles from '../SelectionCircles';
import './SlideSwitcher.scss';

const SlideSwitcher = (props) => {

  const options = props.options;
  const buttonLabel = (props.button) ? props.button : 'Next Slide';
  const updateState = props.updateState;
  let slide = props.state;

  const slidesValid = () => { // (Running on each render) (useEffect?)
    return true;
  };

  const changeSlide = () => {
    slide++;
    updateState(slide);
    if (slide >= options.length) updateState(0);
  };


  const optionImagesListItems = options.map((n, i) =>
    <li className={i === slide ? 'is-active': '' } key={n.id}>
      <img src={n.image} alt={n.title} width="300" height="375" />
    </li>
  );
  const optionImages = (
    <ul className="slideswitcher__images">
      {optionImagesListItems}
    </ul>
  );


  if(slidesValid() === false) {
    console.error('Option data for SlideSwitcher missing mandatory properties.');
    return <span>False</span>;
  }
  return (
    <div className="slideswitcher" data-testid="SlideSwitcher">
      {optionImages}
      <div className="slideswitcher__controls">
        <span className="slideswitcher__selection">{options[slide].title}</span>
        <button onClick={changeSlide} className="slideswitcher__button">{buttonLabel}</button>
        <SelectionCircles circles={options.length} active={slide} />
      </div>
    </div>
  );

};

export default SlideSwitcher;
