import React from 'react';

const WeaponsView = ({ info }) => (
  <div>
    <div className="weapon-name">{info.name}</div>
    <div className="weapon-damage">{`${info.dice}d${info.dieType}`}</div>
    <div className="weapon-description">{info.description}</div>
  </div>
);

export default WeaponsView;
