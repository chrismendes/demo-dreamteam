import React, { useContext } from 'react';
import UserSessionContext from '../../contexts/UserSessionContext';
import './Pitch.scss';

import userPlayers from '../../data/test.userplayers.json';

const Pitch = () => {

  const userSessionState = useContext(UserSessionContext);
  const [userFormation] = userSessionState.formation;
  const [_, setUserPlayers] = userSessionState.players;
  // const [userPlayers, setUserPlayers] = userSessionState.players;

  
  const setPositionHighlight = (el, on) => {
    if(on === true)  el.classList.add('is-highlighted');
    if(on === false) el.classList.remove('is-highlighted');
  };


  const addPlayerToPitch = (positionID, playerID) => {
    let updatedUserPlayers = [...userPlayers];
    const playerIndex = userPlayers.findIndex((p) => p.id === playerID);
    let player = userPlayers[playerIndex];

    // Remove any existing player in position
    const replacePlayerIndex = userPlayers.findIndex((p) => p.pitchPosition === positionID);
    if(replacePlayerIndex > -1) {
      delete updatedUserPlayers[replacePlayerIndex].pitchPosition;
    }

    player.pitchPosition = positionID;
    updatedUserPlayers[playerIndex] = player;
    setUserPlayers(updatedUserPlayers);
  };


  const handlePlayerDragOverPosition = (e) => {
    setPositionHighlight(e.currentTarget, true);
  };

  const handlePlayerDragOutOfPosition = (e) => {
    setPositionHighlight(e.currentTarget, false);
  };

  const handlePlayerDropIntoPosition = (e) => {
    setPositionHighlight(e.currentTarget, false);

    const positionID  = parseInt(e.currentTarget.dataset.positionid);
    const playerID    = parseInt(e.dataTransfer.getData('playerID'));

    addPlayerToPitch(positionID, playerID);
  };

  const handlePlayerDragStart = (e, player) => {
    e.dataTransfer.setData('playerID', player.id); // (IE?) e.dataTransfer.setData('text/plain', playerID)

    // (TODO: Extract to common share between TeamSheet/Pitch)
    let dragImage = new Image(); 
    let dragImageContainer = document.createElement('div');
    dragImage.src = player.photo;
    dragImage.width = 110;
    dragImage.height = 110;
    dragImageContainer.style.position = 'absolute'; dragImageContainer.style.top = '0px'; dragImageContainer.style.left= '-500px';
    dragImageContainer.appendChild(dragImage);
    document.querySelector('body').appendChild(dragImageContainer);
    e.dataTransfer.setDragImage(dragImageContainer, 55, 55);
  };

  const dropConfig = {
    onDrop:      (e) => handlePlayerDropIntoPosition(e),
    onDragEnter: (e) => handlePlayerDragOverPosition(e),
    onDragLeave: (e) => handlePlayerDragOutOfPosition(e),
    onDragOver:  (e) => e.preventDefault()
  };
  const dragConfig = (player) => {
    return {
      draggable: true,
      onDragStart: (e) => handlePlayerDragStart(e, player)
    };
  };

  const pitchPositions = [...new Array(11)].map((_, i) => {
    const player = userPlayers.filter(player => player.pitchPosition === i)[0];

    const stateClass =  (player) ? 'is-occupied' : '';
    const playerName =  (player) ? <span className="pitch__playername">{player.name}</span> : '';
    const playerImage = (player) ? <img className="pitch__playerimage" src={player.photo} alt={player.name} /> : '';
    const dndProps =    (player) ? {...dropConfig, ...dragConfig(player)} : dropConfig;

    return <li className={stateClass} {...dndProps} key={i} data-positionid={i}>
      {playerImage}
      {playerName}
    </li>;
  });

  return (
      <ul className={`pitch pitch-${userFormation.id}`} data-testid="Pitch">
        {pitchPositions}
      </ul>
  );
};

export default Pitch;
