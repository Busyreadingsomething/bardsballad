import React from 'react';
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

export default WeaponsListView;
