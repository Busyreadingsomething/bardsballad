import React from 'react';
import { shape, object } from 'prop-types';
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

AbilityListView.propTypes = {
  ability: shape({
    str: object,
    dex: object,
    con: object,
    int: object,
    wis: object,
    cha: object,
  }).isRequired,
};

export default AbilityListView;
