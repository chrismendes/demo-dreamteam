import React, { useContext } from 'react';
import SelectableCard from '../common/SelectableCard';
import UserSessionContext from '../../contexts/UserSessionContext';

const TeamSheet = () => {

  const userSessionState = useContext(UserSessionContext);
  const [userPlayers] = userSessionState.players;

  
  const sortPlayersByPosition = (a, b) => {
    const sortOrder = { 'GK':  0, 'DEF': 1, 'MID': 2, 'FWD': 3, };
    if(sortOrder[a.position] > sortOrder[b.position]) return 1;
    if(sortOrder[a.position] < sortOrder[b.position]) return -1;
    if(sortOrder[a.position] === sortOrder[b.position]) return 0;
  };
  userPlayers.sort(sortPlayersByPosition);


  const handlePlayerDragStart = (e, player) => {
    e.dataTransfer.setData('playerID', player.id); // (IE?) e.dataTransfer.setData('text/plain', playerID)

    // (TODO: Extract to common share between TeamSheet/Pitch)
    let dragImage = new Image(); 
    dragImage.src = player.photo.small;
    e.dataTransfer.setDragImage(dragImage, 55, 55);
  };

  const dragAndDropConfig = (player) => {
    return {
      draggable: true,
      onDragStart: (e) => handlePlayerDragStart(e, player)
    }
  };


  return (
    <div className="teamsheet flex one" data-testid="TeamSheet">
      {userPlayers.map((player, i) => {
        return (
          <div key={"p" + i}>
            <SelectableCard
              horizontal="true"
              draggable="true"
              dragAndDropConfig={dragAndDropConfig(player)}
              title={player.name}
              description={player.position}
              image={player.photo.small}
              id={player.id}
              selected="false"
              disabled={player.pitchPosition > -1}
              approved="false"
              error="false"
              updateFn={() => {}}
            />
          </div>
        );
      })}

    </div>
  );
};

export default TeamSheet;
