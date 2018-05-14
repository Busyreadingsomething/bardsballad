import React from 'react';

const RollView = ({ roll, position, setScore }) => (
  <div className="roll-container">
    <button className="scoregen-roll" id={position} onClick={() => setScore(roll, position)}>{ roll }</button>
  </div>
);

export default RollView;
