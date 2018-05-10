import React from 'react';
import RollView from './RollView';

const RollListView = ({ rolls }) => (
  <div className="roll-list-container">
    {
      rolls.map(roll => <RollView roll={roll} key={`roll${roll}`} />)
    }
  </div>
);

export default RollListView;
