import React from 'react';
import SelectableCard from '../common/SelectableCard';
import playerData from '../../data/players.json';
import './PlayerSelector.scss';

const PlayerSelector = () => (
  <div className="playerselector" data-testid="PlayerSelector">
    
    <div className="flex two three-600 six-1200">

      {playerData.map((p, i) => 
        <div key={"p" + i}>
          <SelectableCard title={p.name} description={p.club} image={p.photo} />
        </div>
      )}

    </div>

  </div>
);

export default PlayerSelector;
