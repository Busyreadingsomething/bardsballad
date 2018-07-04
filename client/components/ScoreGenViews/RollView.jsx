import React from 'react';
import PropTypes from 'prop-types';

const RollView = ({ roll, position, setScore }) => (
  <div className="roll-container animated rubberBand">
    <button className="scoregen-roll" id={position} onClick={() => setScore(roll, position)}>{ roll }</button>
  </div>
);

RollView.propTypes = {
  roll: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default RollView;
