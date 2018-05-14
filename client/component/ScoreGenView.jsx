import React from 'react';
import RollListContainer from './containers/RollListContainer';
import StatListContainer from './containers/StatListContainer';
import ModListContainer from './containers/ModListContainer';
import SelectRollContainer from './containers/SelectRollContainer';

const ScoreGenView = ({ rollSelect }) => (
  <div className="score-gen-container">
    <StatListContainer />
    <ModListContainer />
    <SelectRollContainer />
    {
      rollSelect === 'standard' ? <RollListContainer /> : 'NOPE'
    }
  </div>
);

export default ScoreGenView;
