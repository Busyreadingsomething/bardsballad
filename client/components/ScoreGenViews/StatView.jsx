import React from 'react';
import PropTypes from 'prop-types';

const StatView = ({ score }) => (
  <div className="ability-stat-container">
    <div className="ability-value">
      {score.val}
    </div>
  </div>
);

StatView.propTypes = {
  score: PropTypes.shape({
    val: PropTypes.number,
  }).isRequired,
};

export default StatView;
