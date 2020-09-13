import React, { useState, useContext } from 'react';
import SelectableCard from '../common/SelectableCard';
import UserStateContext from '../../context/UserContext';

import userPlayers from '../../data/test.userplayers.json';

let userPlayersFlatList = [];
for(const [key, value] of Object.entries(userPlayers)) {
  userPlayersFlatList.push(...value);
}

const TeamSheet = () => {

  const userState = useContext(UserStateContext);
  const [userFormation] = userState.formation;
  // const [userPlayers, setUserPlayers] = userState.players;

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
