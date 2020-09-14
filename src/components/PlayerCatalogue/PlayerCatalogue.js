import React, { useState, useContext } from 'react';
import TodoTabs from '../common/TodoTabs';
import SelectableCard from '../common/SelectableCard';
import UserSessionContext from '../../session/UserSessionContext';
import playerPositions from '../../data/positions.json';
import playerList from '../../data/players.json';

const PlayerCatalogue = () => {

  const getPlayersByPosition = (position) => {
    return playerList.filter(player => player.position === position);
  };
  const getPlayerByID = (id) => {
    return playerList.filter(player => player.id === id)[0];
  };

  const userSessionState = useContext(UserSessionContext);
  const [userFormation] = userSessionState.formation;
  const [userPlayers, setUserPlayers] = userSessionState.players;
  const [userChecklist, setUserChecklist] = userSessionState.checklist;

  const [activeCategory, setActiveCategory] = useState(playerPositions[0].id);
  const [activeCategoryPlayers, setActiveCategoryPlayers] = useState(getPlayersByPosition(activeCategory));
  const ERROR = -1, INCOMPLETE = 0, COMPLETED = 1;

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
    updateUserChecklist(player.position);
  };

  const getPlayerCategoryStatus = (playerPosition) => {
    const current = userPlayers[playerPosition].length;
    const required = userFormation.places[playerPosition];
    let status = INCOMPLETE;
    
    if(current === required) status = COMPLETED;
    if(current > required)   status = ERROR;

    return status;
  };
  
  const calculatePlayerStatus = (player) => {
    const selected = (getSelectedPlayerIndex(player.position, player.id) > -1);

    let status = {
      selected: selected,
      approved: false,
      error:    false,
      disabled: false
    };

    if(getPlayerCategoryStatus(player.position) === COMPLETED) {
      status.approved = selected;
      status.disabled = !selected;
    }
    if(getPlayerCategoryStatus(player.position) === ERROR) {
      status.error = selected;
      status.disabled = !selected;
    }

    return status;
  };

  const updateUserChecklist = (playerPosition) => {
    const statuses = {...userChecklist};
    statuses[playerPosition] = getPlayerCategoryStatus(playerPosition);
    setUserChecklist(statuses);
  };

  const initCategoryTabs = () => {
    let tabs = [];
    playerPositions.forEach((position, i) => {
      const tab = {...playerPositions[i]};
      tab.status = INCOMPLETE;
      if(userPlayers[position.id].length === userFormation.places[position.id]) tab.status = COMPLETED;
      if(userPlayers[position.id].length > userFormation.places[position.id]) tab.status = ERROR;
      tab.label = `${tab.label}s (${userPlayers[position.id].length}/${userFormation.places[position.id]})`;
      tabs.push(tab)
    });
    return tabs;
  };
  const tabConfig = initCategoryTabs();

  return (
    <div className="playercatalogue" data-testid="PlayerCatalogue">

      <TodoTabs
        tabs={tabConfig}
        updateFn={changeCategory}
      />

      <div className="flex two three-600 six-1200">

        {activeCategoryPlayers.map((player, i) => {
          const status = calculatePlayerStatus(player);
          return (
            <div key={"p" + i}>
              <SelectableCard
                title={player.name}
                description={player.club}
                image={player.photo}
                id={player.id}
                selected={status['selected']}
                approved={status['approved']}
                error={status['error']}
                disabled={status['disabled']}
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
