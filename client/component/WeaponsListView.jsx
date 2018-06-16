import React from 'react';
import { arrayOf, object } from 'prop-types';
import WeaponsView from './WeaponsView';

const WeaponsListView = ({ weapons }) => (
  <div className="weapons-container">
    WEAPONS:
    {
      weapons.map(weapon => (
        <WeaponsView
          key={weapon.id}
          info={weapon}
        />
      ))
    }
  </div>
);

WeaponsListView.propTypes = {
  weapons: arrayOf(object).isRequired,
};

export default WeaponsListView;
