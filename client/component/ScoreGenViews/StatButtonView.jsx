import React from 'react';
import PropTypes from 'prop-types';

const StatButtonView = ({ stat, selectStat }) => (
  <div className="stat-button-container">
    <button className="scoregen-stat-button" onClick={() => selectStat(stat)}>{stat.toUpperCase()}</button>
  </div>
);

StatButtonView.propTypes = {
  stat: PropTypes.string.isRequired,
  selectStat: PropTypes.func.isRequired,
};

export default StatButtonView;
