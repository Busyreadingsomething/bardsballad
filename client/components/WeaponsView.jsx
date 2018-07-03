import React from 'react';
import { number, shape, string } from 'prop-types';

const WeaponsView = ({ info }) => (
  <div className="weapon-container item-card" die={info.dieType} dice={info.dice}>
    <div className="weapon-base">
      <div className="weapon-name">{info.name}</div>
      <div className="weapon-damage">{`${info.dice}d${info.dieType}`}</div>
    </div>
    <div className="weapon-description">{info.description}</div>
  </div>
);

WeaponsView.propTypes = {
  info: shape({
    dieType: number,
    dice: number,
    name: string,
    description: string,
  }).isRequired,
};

export default WeaponsView;
