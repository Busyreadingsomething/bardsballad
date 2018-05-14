import React from 'react';

const StatButtonView = ({ stat, selectStat }) => (
  <div className="stat-button-container">
    <button className="scoregen-stat-button" onClick={() => selectStat(stat)}>{stat}</button>
  </div>
);

export default StatButtonView;
