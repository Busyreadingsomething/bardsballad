import React from 'react';
import PropTypes from 'prop-types';

const StatView = ({ score }) => (
  <div className="gen-ability-value secondary">
    {score.val}
  </div>
);

StatView.propTypes = {
  score: PropTypes.shape({
    val: PropTypes.number,
  }).isRequired,
};

export default StatView;
