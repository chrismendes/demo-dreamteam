import React, { useState, useContext } from 'react';
import TodoTabs from '../common/TodoTabs';
import SelectableCard from '../common/SelectableCard';
import UserTeamContext from '../../context/UserContext';
import playerList from '../../data/players.json';
import './PlayerCatalogue.scss';

const PlayerCatalogue = () => {

  const getPlayersByPosition = (position) => {
    return playerList.filter(player => player.position === position);
  };

  const [activeCategory, setActiveCategory] = useState('GK');
  const [activeCategoryPlayers, setActiveCategoryPlayers] = useState(getPlayersByPosition(activeCategory));
  const [userTeamState, setUserTeamState] = useContext(UserTeamContext);

  const changeCategory = (category) => {
    let players = getPlayersByPosition(category);
    setActiveCategory(category);
    setActiveCategoryPlayers(players);
  };

  const togglePlayer = (playerID) => {

  };

  return (
    <div className="playercatalogue" data-testid="PlayerCatalogue">

      <TodoTabs tabs={[
        { id: 'GK',  label: 'Goalkeepers' },
        { id: 'DEF', label: 'Defenders' },
        { id: 'MID', label: 'Midfielders' },
        { id: 'FWD', label: 'Forwards' }
      ]} updateFn={changeCategory} />

      <div className="flex two three-600 six-1200">

        {activeCategoryPlayers.map((p, i) => 
          <div key={"p" + i}>
            <SelectableCard title={p.name} description={p.club} image={p.photo} id={p.id} updateFn={togglePlayer} />
          </div>
        )}

      </div>

    </div>
  );
};

export default PlayerCatalogue;
