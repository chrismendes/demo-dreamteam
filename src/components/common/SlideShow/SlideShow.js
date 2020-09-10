import React from 'react';
import './SlideShow.scss';

const SlideShow = (props) => {

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
    <ul className="slideshow__images">
      {optionImagesListItems}
    </ul>
  );
  const dots = () => {
    return Array.from(Array(options.length), (_, i) => 
      <li className={i === slide ? 'is-active': '' } key={i}>
        <span className="slideshow__dotoff material-icons">radio_button_unchecked</span>
        <span className="slideshow__doton material-icons">check_circle</span>
      </li>
    );
  };


  if(slidesValid() === false) {
    console.error('Option data for SlideShow missing mandatory properties.');
    return <span>False</span>;
  }
  return (
    <div className="slideshow" data-testid="SlideShow">
      {optionImages}
      <div className="slideshow__controls">
        <span className="slideshow__title">{options[slide].title}</span>
        <button onClick={changeSlide} className="slideshow__button">{buttonLabel}</button>
        <ul className="slideshow__dots">
          {dots()}
        </ul>
      </div>
    </div>
  );

};

export default SlideShow;
