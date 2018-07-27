import React from 'react';
import { number, shape, string, func, bool } from 'prop-types';
import DiceRollView from './DiceRollViews/DiceRollView';

const WeaponsView = ({ index, info, roll }) => (
  <button
    className="weapon-container item-card primary"
    die={info.dieType}
    dice={info.dice}
    onClick={() => roll(index)}>
    <div className="weapon-base">
      <p className="weapon-name">{info.name}</p>
      <p className="weapon-damage">{`${info.dice}d${info.dieType}`}</p>
    </div>
    <p className="weapon-description">{info.description}</p>
    {
      info.rolled ? <DiceRollView die={info.dieType} dice={info.dice} /> : null
    }
  </button>
);

WeaponsView.propTypes = {
  info: shape({
    dieType: number,
    dice: number,
    name: string,
    description: string,
    rolled: bool,
  }).isRequired,
  index: number.isRequired,
  roll: func.isRequired,
};

export default WeaponsView;
