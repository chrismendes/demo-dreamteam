import React, { useState, useContext } from 'react';
import SelectableCard from '../common/SelectableCard';
import UserStateContext from '../../context/UserContext';
// import playerPositions from '../../data/positions.json';

const TeamSheet = () => {

  

  return (
    <div className="teamsheet" data-testid="TeamSheet">

      <SelectableCard title="Joe Blogs" description="Arsenal" image="https://resources.premierleague.com/premierleague/photos/players/250x250/p80201.png" horizontal="true" status="0" updateFn={() => {}} />

      {/* {[].map((player, i) => {
        return (
          <div key={"p" + i}>
            <SelectableCard
              title={player.name}
              description={player.club}
              image={player.photo}
              id={player.id}
              // status={getPlayerStatus(player)}
              // updateFn={togglePlayerSelection}
            />
          </div>
        );
      })} */}

    </div>
  );
};

export default TeamSheet;
