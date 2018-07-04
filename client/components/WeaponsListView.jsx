import React from 'react';
import { arrayOf, object } from 'prop-types';
import WeaponsView from './WeaponsView';

const WeaponsListView = ({ weapons }) => (
  <div className="weapon-list-container card">
    WEAPONS:
    <div className="item-list">
      {
        weapons.map(weapon => (
          <WeaponsView
            key={weapon.id}
            info={weapon}
          />
        ))
      }
    </div>
  </div>
);

WeaponsListView.propTypes = {
  weapons: arrayOf(object).isRequired,
};

export default WeaponsListView;
