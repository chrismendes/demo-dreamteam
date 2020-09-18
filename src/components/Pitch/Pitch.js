import React, { useContext, useEffect } from 'react';
import UserSessionContext from '../../contexts/UserSessionContext';
import './Pitch.scss';

const Pitch = (props) => {

  const userSessionState = useContext(UserSessionContext);
  // const [userFormation] = userSessionState.formation;
  
  const [userChecklist, setUserChecklist] = userSessionState.checklist;
  const players = props.team;
  const formation = props.formation;
  const updatePlayers = props.update;
  const readOnly = (props.readonly || false);
  
  const setPositionHighlight = (el, on) => {
    if(on === true)  el.classList.add('is-highlighted');
    if(on === false) el.classList.remove('is-highlighted');
  };


  const addPlayerToPitch = (positionID, playerID) => {
    let updatedUserPlayers = [...players];
    const playerIndex = players.findIndex((p) => p.id === playerID);
    let player = players[playerIndex];

    // Remove any existing player in position
    const replacePlayerIndex = players.findIndex((p) => p.pitchPosition === positionID);
    if(replacePlayerIndex > -1) {
      delete updatedUserPlayers[replacePlayerIndex].pitchPosition;
    }

    player.pitchPosition = positionID;
    updatedUserPlayers[playerIndex] = player;
    updatePlayers(updatedUserPlayers);
  };


  const updateUserChecklist = () => {
    let updatedChecklist = [...userChecklist];
    const playersOffPitch = players.filter(player => player.pitchPosition === undefined).length;
    updatedChecklist[1] = (playersOffPitch === 0);
    setUserChecklist(updatedChecklist);
  };
  
  useEffect(() => {
    updateUserChecklist();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);


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
    dragImage.src = player.photo.small;
    e.dataTransfer.setDragImage(dragImage, 55, 55);
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
    const player = players.filter(player => player.pitchPosition === i)[0];

    const stateClass =  (player) ? 'is-occupied' : '';
    const playerName =  (player) ? <span className="pitch__playername">{player.name}</span> : '';
    const playerImage = (player) ? <img className="pitch__playerimage" src={player.photo.large} alt={player.name} width="90" height="90" /> : '';
    const dndProps =    (!readOnly ? ((player) ? {...dropConfig, ...dragConfig(player)} : dropConfig) : {});

    return <li className={stateClass} {...dndProps} key={i} data-positionid={i}>
      {playerImage}
      {playerName}
    </li>;
  });

  return (
      <ul className={`pitch pitch-${formation.id}`} data-testid="Pitch">
        {pitchPositions}
      </ul>
  );
};

export default Pitch;
