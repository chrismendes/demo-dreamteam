import React, { useState, useContext } from 'react';
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

  const [activeCategory, setActiveCategory] = useState('GK');
  const [activeCategoryPlayers, setActiveCategoryPlayers] = useState(getPlayersByPosition(activeCategory));
  const [userTeamSelection, setUserTeamSelection] = useContext(UserTeamContext);

  const ERROR = -1, INCOMPLETE = 0, COMPLETED = 1;
  const [categoryStatus, setCategoryStatus] = useState({ 'GK': INCOMPLETE, 'DEF': INCOMPLETE, 'MID': INCOMPLETE, 'FWD': INCOMPLETE });

  const changeCategory = (category) => {
    let players = getPlayersByPosition(category);
    setActiveCategory(category);
    setActiveCategoryPlayers(players);
  };

  const getSelectedPlayerIndex = (position, id) => {
    for(let i = 0; i < userTeamSelection.players[position].length; i++) {
      if(userTeamSelection.players[position][i].id === id) {
        return i;
      }
    }
    return -1;
  };

  const updateCategoryStatus = (category) => {
    const current = userTeamSelection.players[category].length;
    const required = userTeamSelection.formation.places[category];

    const statuses = {...categoryStatus};
    if(current < required) statuses[category] = 0;
    if(current === required) statuses[category] = 1;
    if(current > required) statuses[category] = -1;
    setCategoryStatus(statuses);
  };
  
  const togglePlayerSelection = (id) => {
    let player = getPlayerByID(id);
    let selectedPlayerIndex = getSelectedPlayerIndex(player.position, id);
    let newPlayers = {...userTeamSelection.players};

    if(selectedPlayerIndex > -1) {
      newPlayers[player.position].splice(selectedPlayerIndex, 1);
    } else {
      newPlayers[player.position].push(player);
    }

    setUserTeamSelection({
      ...userTeamSelection,
      players: newPlayers
    });

    updateCategoryStatus(player.position);
  };

  const getCardStateClass = (player) => {
    let stateClass = '';
    const selected = (getSelectedPlayerIndex(player.position, player.id) > -1);

    if(categoryStatus[player.position] === INCOMPLETE) {
      stateClass = (selected ? 'is-selected' : '');
    }
    if(categoryStatus[player.position] === COMPLETED) {
      stateClass = (selected ? 'is-approved' : 'is-disabled');
    }
    if(categoryStatus[player.position] === ERROR) {
      stateClass = (selected ? 'is-error' : 'is-disabled');
    }

    return stateClass;
  };


  return (
    <div className="playercatalogue" data-testid="PlayerCatalogue">

      <TodoTabs tabs={[
        { id: 'GK',  label: `Goalkeepers (${userTeamSelection.players['GK'].length}/${userTeamSelection.formation.places['GK']})`, status: categoryStatus['GK'] },
        { id: 'DEF', label: `Defenders (${userTeamSelection.players['DEF'].length}/${userTeamSelection.formation.places['DEF']})`, status: categoryStatus['DEF'] },
        { id: 'MID', label: `Midfielders (${userTeamSelection.players['MID'].length}/${userTeamSelection.formation.places['MID']})`, status: categoryStatus['MID'] },
        { id: 'FWD', label: `Forwards (${userTeamSelection.players['FWD'].length}/${userTeamSelection.formation.places['FWD']})`, status: categoryStatus['FWD'] }
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
                stateClass={getCardStateClass(player)}
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
