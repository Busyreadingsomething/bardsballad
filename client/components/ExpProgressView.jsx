import React from 'react';
import PropTypes from 'prop-types';

const ExpProgressView = ({ experience, nextLevel }) => (
  <div className="exp-container">
    <progress value={experience} max={nextLevel} />
  </div>
);

ExpProgressView.propTypes = {
  experience: PropTypes.number.isRequired,
  nextLevel: PropTypes.number.isRequired,
};

export default ExpProgressView;
