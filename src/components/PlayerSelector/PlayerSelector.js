import React from 'react';
import TodoTabs from '../common/TodoTabs';
import SelectableCard from '../common/SelectableCard';
import playerData from '../../data/players.json';
import './PlayerSelector.scss';

const PlayerSelector = () => {

  const selectPlayer = () => {

  };

  return (
    <div className="playerselector" data-testid="PlayerSelector">

      <TodoTabs tabs={["Goalkeepers", "Defenders", "Midfielders", "Forwards"]} />

      <div className="flex two three-600 six-1200">

        {playerData.map((p, i) => 
          <div key={"p" + i}>
            <SelectableCard onClick={selectPlayer} title={p.name} description={p.club} image={p.photo} />
          </div>
        )}

      </div>

    </div>
  );
};

export default PlayerSelector;
