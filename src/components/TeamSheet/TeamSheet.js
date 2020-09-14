import React, { useState, useContext } from 'react';
import SelectableCard from '../common/SelectableCard';
import UserSessionContext from '../../session/UserSessionContext';

import userPlayers from '../../data/test.userplayers.json';

let userPlayersFlatList = [];
for(const [key, value] of Object.entries(userPlayers)) {
  userPlayersFlatList.push(...value);
}

const TeamSheet = () => {

  const userSessionState = useContext(UserSessionContext);
  const [userFormation] = userSessionState.formation;
  // const [userPlayers, setUserPlayers] = userSessionState.players;

  return (
    <div className="teamsheet flex one" data-testid="TeamSheet">

      {userPlayersFlatList.map((player, i) => {
        return (
          <div key={"p" + i}>
            <SelectableCard
              horizontal="true"
              title={player.name}
              description={player.club}
              image={player.photo}
              id={player.id}
              selected="false"
              disabled="false"
              approved="false"
              error="false"
              updateFn={() => {}}
              // updateFn={togglePlayerSelection}
            />
          </div>
        );
      })}

    </div>
  );
};

export default TeamSheet;
