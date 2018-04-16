import React from 'react';
import ScoreView from './ScoreView';

const AbilityListView = ({ ability }) => (
  <div className="ability-row">
    {
      Object.keys(ability).map(stat => (<ScoreView
        key={stat}
        stat={stat}
        ability={ability[stat]}
      />))
    }
  </div>
);

export default AbilityListView;
