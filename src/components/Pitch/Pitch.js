import React from 'react';
import pitchImage from './pitch.jpg';
import './Pitch.scss';

const Pitch = () => (
  <div className="pitch" data-testid="Pitch">
    <img src={pitchImage} alt="Football pitch" />
  </div>
);

export default Pitch;
