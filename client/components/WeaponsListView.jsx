import React from 'react';
import { arrayOf, object, func } from 'prop-types';
import WeaponsView from './WeaponsView';

const WeaponsListView = ({ weapons, roll }) => (
  <div className="weapon-list-container card">
    WEAPONS:
    <div className="item-list">
      {
        weapons.map((weapon, index) => (
          <WeaponsView
            key={weapon.id}
            info={weapon}
            index={index}
            roll={roll}
          />
        ))
      }
    </div>
  </div>
);

WeaponsListView.propTypes = {
  weapons: arrayOf(object).isRequired,
  roll: func.isRequired,
};

export default WeaponsListView;
