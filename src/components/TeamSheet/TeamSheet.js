// import React, { useContext } from 'react';
import React from 'react';
import SelectableCard from '../common/SelectableCard';
// import UserSessionContext from '../../contexts/UserSessionContext';

import userPlayers from '../../data/test.userplayers.json';

const TeamSheet = () => {

  // const userSessionState = useContext(UserSessionContext);
  // const [userPlayers] = userSessionState.players;
  
  const handlePlayerDragStart = (e, playerID) => {
    e.dataTransfer.setData('playerID', playerID); // (IE?) e.dataTransfer.setData('text/plain', playerID)
  };

  const dragAndDropConfig = (playerID) => {
    return {
      draggable: true,
      onDragStart: (e) => handlePlayerDragStart(e, playerID)
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
              dragAndDropConfig={dragAndDropConfig(player.id)}
              title={player.name}
              description={player.position}
              image={player.photo}
              id={player.id}
              selected="false"
              disabled="false"
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
