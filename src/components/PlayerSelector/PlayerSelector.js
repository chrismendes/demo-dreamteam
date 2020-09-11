import React, { useState, useContext } from 'react';
import TodoTabs from '../common/TodoTabs';
import SelectableCard from '../common/SelectableCard';
import UserTeamContext from '../../context/UserContext';
import playerCatalogue from '../../data/players.json';
import './PlayerSelector.scss';

const PlayerSelector = () => {

  const getPlayersByPosition = (position) => {
    return playerCatalogue.filter(player => player.position === position);
  };
  const getPlayerByID = (id) => {
    return playerCatalogue.filter(player => player.id === id)[0];
  };

  const [activeCategory, setActiveCategory] = useState('GK');
  const [activeCategoryPlayers, setActiveCategoryPlayers] = useState(getPlayersByPosition(activeCategory));
  const [userTeamSelection, setUserTeamSelection] = useContext(UserTeamContext);

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
  };

  return (
    <div className="playerselector" data-testid="PlayerSelector">

      <TodoTabs tabs={[
        { id: 'GK',  label: `Goalkeepers (0/${userTeamSelection.formation.places[0]})` },
        { id: 'DEF', label: `Defenders (0/${userTeamSelection.formation.places[1]})` },
        { id: 'MID', label: `Midfielders (0/${userTeamSelection.formation.places[2]})` },
        { id: 'FWD', label: `Forwards (0/${userTeamSelection.formation.places[3]})` },
      ]} updateFn={changeCategory} />

      <div className="flex two three-600 six-1200">

        {activeCategoryPlayers.map((p, i) => 
          <div key={"p" + i}>
            <SelectableCard title={p.name} description={p.club} image={p.photo} id={p.id} updateFn={togglePlayerSelection} />
          </div>
        )}

      </div>

    </div>
  );
};

export default PlayerSelector;
