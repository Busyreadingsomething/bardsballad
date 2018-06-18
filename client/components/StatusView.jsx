import React from 'react';
import { number } from 'prop-types';

const StatusView = ({
  armor,
  init,
  speed,
  maxHP,
  currentHP,
  tempHP,
  hitDie,
}) => (
  <div className="status-container">
    <div className="status-row-1">
      <div className="status-armor">
        <div className="status-armor-value">{armor}</div>
        <div className="status-ac">AC</div>
      </div>
      <div className="status-initiative">
        <div className="status-initiative-value">{init}</div>
        <div className="status-init">Initiative</div>
      </div>
      <div className="status-speed">
        <div className="status-speed-value">{speed} ft.</div>
        <div className="status-speed-title">Speed</div>
      </div>
    </div>
    <div className="status-row-2">
      <div className="status-max-hitpoints">
        <div className="status-max-value">{maxHP}</div>
        <div className="status-max">Max HP</div>
      </div>
      <div className="status-current-hitpoints">
        <div className="status-current-value">{currentHP}</div>
        <div className="status-current">Current HP</div>
      </div>
      <div className="status-temp-hitpoints">
        <div className="status-temp-value">{tempHP}</div>
        <div className="status-temp">Temp HP</div>
      </div>
    </div>
    <div className="status-row-3">
      <div className="status-hitdie">
        <div className="status-hitdie-value">{hitDie}</div>
        <div className="status-hitdie-title">Hit Die</div>
      </div>
      <div className="status-death-saves">
        PUT SAVES COMPONENT HERE
      </div>
    </div>
  </div>
);

StatusView.propTypes = {
  armor: number.isRequired,
  init: number.isRequired,
  speed: number.isRequired,
  maxHP: number.isRequired,
  currentHP: number.isRequired,
  tempHP: number.isRequired,
  hitDie: number.isRequired,
};

export default StatusView;
