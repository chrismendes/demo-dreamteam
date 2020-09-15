import React, { useContext } from 'react';
import UserSessionContext from '../../contexts/UserSessionContext';
import './Pitch.scss';

const Pitch = () => {

  const userSessionState = useContext(UserSessionContext);
  const [userFormation] = userSessionState.formation;

  return (
      <ul className={`pitch pitch-${userFormation.id}`} data-testid="Pitch">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="is-occupied" draggable="true">
          <img className="pitch__playerimage" src="https://resources.premierleague.com/premierleague/photos/players/250x250/p182539.png" alt="" />
          <span className="pitch__playername">Pierre-Emerick Aubameyang</span>
        </li>
        <li className="is-highlighted"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    // </div>
  );
};

export default Pitch;
