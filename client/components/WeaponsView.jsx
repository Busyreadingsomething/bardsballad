import React from 'react';
import { number, shape, string, func, bool } from 'prop-types';
import DiceRollView from './DiceRollViews/DiceRollView';

const WeaponsView = ({ index, info, roll }) => (
  <div className="weapon-container item-card"
    die={info.dieType}
    dice={info.dice}
    onClick={() => roll(index)}>
    <div className="weapon-base">
      <div className="weapon-name">{info.name}</div>
      <div className="weapon-damage">{`${info.dice}d${info.dieType}`}</div>
    </div>
    <div className="weapon-description">{info.description}</div>
    {
      info.rolled ? <DiceRollView die={info.dieType} dice={info.dice} /> : null
    }
  </div>
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
