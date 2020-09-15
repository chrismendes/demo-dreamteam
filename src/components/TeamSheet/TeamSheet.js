import React, { useState, useContext } from 'react';
import SelectableCard from '../common/SelectableCard';
// import UserSessionContext from '../../contexts/UserSessionContext';

import userPlayers from '../../data/test.userplayers.json';

const TeamSheet = () => {

  // const userSessionState = useContext(UserSessionContext);
  // const [userPlayers] = userSessionState.players;
  let userPlayersFlatList = [];

  for(const [key, value] of Object.entries(userPlayers)) {
    userPlayersFlatList.push(...value);
  }

  return (
    <div className="teamsheet flex one" data-testid="TeamSheet">

      {userPlayersFlatList.map((player, i) => {
        return (
          <div key={"p" + i}>
            <SelectableCard
              horizontal="true"
              draggable="true"
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
