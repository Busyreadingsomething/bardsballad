import React from 'react';

const StatusView = ({
  armor,
  init,
  speed,
  maxHp,
  hp,
  tempHp,
  hitdie,
}) => (
  <div className="status-container">
    <div className="status-row-1">
      <div className="status-armor">
        {armor}
      </div>
      <div className="status-initiative">
        {init}
      </div>
      <div className="status-speed">
        {speed} ft.
      </div>
    </div>
    <div className="status-row-2">
      <div className="status-max-hitpoints">
        {maxHp}
      </div>
      <div className="status-current-hitpoints">
        {hp}
      </div>
      <div className="status-temp-hitpoints">
        {tempHp}
      </div>
    </div>
    <div className="status-row-3">
      <div className="status-hitdie">
        {hitdie}
      </div>
      <div className="status-death-saves">
        PUT SAVES COMPONENT HERE
      </div>
    </div>
  </div>
);

export default StatusView;
