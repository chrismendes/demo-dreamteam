import React, { useState, useContext, useEffect } from 'react';
import TodoTabs from '../common/TodoTabs';
import SelectableCard from '../common/SelectableCard';
import UserSessionContext from '../../contexts/UserSessionContext';
import playerPositions from '../../data/positions.json';
import playerList from '../../data/players';

// (TODO: Extract get/helper functions)

const PlayerCatalogue = () => {

  const getPlayersByPosition = (position) => {
    return playerList.filter(player => player.position === position);
  };
  const getPlayerByID = (id) => {
    return playerList.filter(player => player.id === parseInt(id))[0];
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

  const togglePlayerSelection = (playerID) => {
    let player = getPlayerByID(playerID);
    const playerIndex = userPlayers.findIndex((p) => p.id === playerID);
    let newPlayers = [...userPlayers];

    if(playerIndex > -1) {
      newPlayers.splice(playerIndex, 1);
    } else {
      newPlayers.push(player);
    }

    setUserPlayers(newPlayers);
  };

  const getPlayerCategoryStatus = (playerPosition) => {
    const currentlySelected = userPlayers.filter((p) => p.position === playerPosition).length;
    const required = userFormation.places[playerPosition];

    let status = INCOMPLETE;

    if(currentlySelected === required) status = COMPLETED;
    if(currentlySelected > required)   status = ERROR;

    return status;
  };
  
  const calculatePlayerStatus = (player) => {
    const selected = (userPlayers.findIndex((p) => p.id === player.id) > -1);

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

  const updateUserChecklist = () => {
    let updatedChecklist = [...userChecklist];
    let userCanProgress = true;

    for (const position of playerPositions) {
      let status = getPlayerCategoryStatus(position.id);
      if(status === INCOMPLETE || status === ERROR) {
        userCanProgress = false;
      }
    };

    updatedChecklist[0] = userCanProgress;
    setUserChecklist(updatedChecklist);
  };

  useEffect(() => {
    updateUserChecklist();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFormation, userPlayers]);

  const initCategoryTabs = () => {
    let tabs = [];
    playerPositions.forEach((position, i) => {
      const tab = {...playerPositions[i]};
      tab.status = INCOMPLETE;

      tab.status = getPlayerCategoryStatus(position.id);
      tab.label = `${tab.label}s (${userPlayers.filter((p) => p.position === position.id).length}/${userFormation.places[position.id]})`;
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
                image={player.photo.large}
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
