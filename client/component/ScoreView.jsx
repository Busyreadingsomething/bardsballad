import React from 'react';

const ScoreView = ({ stat, ability }) => (
  <div className="ability-stat-container" id={stat}>
    <div className="ability-value">
      {ability.value}
    </div>
    <div className="modifier-value">
      {ability.mod}
    </div>
    <div className="saves">
      {
        // Object.keys(ability.saves).map(save => (
        //   <div className="save" id={save}>
        //     {ability.saves[save]}
        //     <div className="save-name">
        //       {save}
        //     </div>
        //   </div>
        // ))
      }
    </div>
    <div className="stat-name">{stat.toUpperCase()}</div>
  </div>
);

export default ScoreView;
