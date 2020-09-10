import React, { useState } from 'react';
import './SlideShow.scss';

const SlideShow = (props) => {

  const options = props.options;
  const buttonLabel = (props.button) ? props.button : 'Next Slide';
  const updateState = props.update;
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = () => {
    if (activeSlide < options.length-1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
    updateState(options[activeSlide]);
  };


  const optionImagesListItems = options.map((n, i) =>
    <li className={i === activeSlide ? 'is-active': '' } key={n.id}>
      <img src={n.image} alt={n.title} width="300" height="375" />
    </li>
  );
  const optionImages = (
    <ul className="slideshow__images">
      {optionImagesListItems}
    </ul>
  );
  const dots = () => {
    return Array.from(Array(options.length), (_, i) => 
      <li className={i === activeSlide ? 'is-active': '' } key={i}>
        <span className="slideshow__dotoff material-icons">radio_button_unchecked</span>
        <span className="slideshow__doton material-icons">check_circle</span>
      </li>
    );
  };


  return (
    <div className="slideshow" data-testid="SlideShow">
      {optionImages}
      <div className="slideshow__controls">
        <span className="slideshow__title">{options[activeSlide].title}</span>
        <button onClick={changeSlide} className="slideshow__button">{buttonLabel}</button>
        <ul className="slideshow__dots">
          {dots()}
        </ul>
      </div>
    </div>
  );

};

export default SlideShow;
