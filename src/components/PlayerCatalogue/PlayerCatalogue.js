import React, { useState, useContext, useEffect, useCallback } from 'react';
import TodoTabs from '../common/TodoTabs';
import SelectableCard from '../common/SelectableCard';
import UserTeamContext from '../../context/UserContext';
import playerList from '../../data/players.json';

const PlayerCatalogue = () => {

  const getPlayersByPosition = (position) => {
    return playerList.filter(player => player.position === position);
  };
  const getPlayerByID = (id) => {
    return playerList.filter(player => player.id === id)[0];
  };

  const userTeamSelectionState = useContext(UserTeamContext);
  const [userFormation] = userTeamSelectionState.formation;
  const [userPlayers, setUserPlayers] = userTeamSelectionState.players;
  const [userSelectionStatus, setUserSelectionStatus] = userTeamSelectionState.status;

  const [activeCategory, setActiveCategory] = useState('GK');
  const [activeCategoryPlayers, setActiveCategoryPlayers] = useState(getPlayersByPosition(activeCategory));
  const ERROR = -1, INCOMPLETE = 0, COMPLETED = 1;
  const positionIDs = Object.keys(userPlayers);

  const changeCategory = (category) => {
    let players = getPlayersByPosition(category);
    setActiveCategory(category);
    setActiveCategoryPlayers(players);
  };

  const getSelectedPlayerIndex = (position, id) => {
    for(let i = 0; i < userPlayers[position].length; i++) {
      if(userPlayers[position][i].id === id) {
        return i;
      }
    }
    return -1;
  };
  
  const togglePlayerSelection = (id) => {
    let player = getPlayerByID(id);
    let selectedPlayerIndex = getSelectedPlayerIndex(player.position, id);
    let newPlayers = {...userPlayers};

    if(selectedPlayerIndex > -1) {
      newPlayers[player.position].splice(selectedPlayerIndex, 1);
    } else {
      newPlayers[player.position].push(player);
    }

    setUserPlayers(newPlayers);
    updateCategoryStatus(player.position);
  };

  const updateCategoryStatus = useCallback((category) => {
    const current = userPlayers[category].length;
    const required = userFormation.places[category];

    const statuses = {...userSelectionStatus};
    if(current < required) statuses[category] = INCOMPLETE;
    if(current === required) statuses[category] = COMPLETED;
    if(current > required) statuses[category] = ERROR;

    setUserSelectionStatus(statuses);
  }, [userPlayers, userFormation, userSelectionStatus, setUserSelectionStatus, ERROR, INCOMPLETE, COMPLETED]);

  const getPlayerStatus = (player) => {
    const selected = (getSelectedPlayerIndex(player.position, player.id) > -1);
    let status = {
      selected: selected,
      approved: false,
      error:    false,
      disabled: false
    };

    if(userSelectionStatus[player.position] === COMPLETED) {
    status.approved = selected;
      status.disabled = !selected;
    }
    if(userSelectionStatus[player.position] === ERROR) {
      status.error = selected;
      status.disabled = !selected;
    }

    return status;
  };

  useEffect(() => {
    positionIDs.forEach((position) => {
      // updateCategoryStatus(position);
    });
  }, [userFormation, positionIDs, updateCategoryStatus]);

  return (
    <div className="playercatalogue" data-testid="PlayerCatalogue">

      <TodoTabs tabs={[
        { id: 'GK',  label: `Goalkeepers (${userPlayers['GK'].length}/${userFormation.places['GK']})`, status: userSelectionStatus['GK'] },
        { id: 'DEF', label: `Defenders (${userPlayers['DEF'].length}/${userFormation.places['DEF']})`, status: userSelectionStatus['DEF'] },
        { id: 'MID', label: `Midfielders (${userPlayers['MID'].length}/${userFormation.places['MID']})`, status: userSelectionStatus['MID'] },
        { id: 'FWD', label: `Forwards (${userPlayers['FWD'].length}/${userFormation.places['FWD']})`, status: userSelectionStatus['FWD'] }
      ]} updateFn={changeCategory} />

      <div className="flex two three-600 six-1200">

        {activeCategoryPlayers.map((player, i) => {
          return (
            <div key={"p" + i}>
              <SelectableCard
                title={player.name}
                description={player.club}
                image={player.photo}
                id={player.id}
                status={getPlayerStatus(player)}
                updateFn={togglePlayerSelection}
              />
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default PlayerCatalogue;
