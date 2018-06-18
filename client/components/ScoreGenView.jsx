import React from 'react';
import { string } from 'prop-types';
import RollListContainer from '../containers/RollListContainer';
import StatListContainer from '../containers/StatListContainer';
import ModListContainer from '../containers/ModListContainer';
import SelectRollContainer from '../containers/SelectRollContainer';

const ScoreGenView = ({ rollSelect }) => (
  <div className="score-gen-container">
    <StatListContainer />
    <ModListContainer />
    <SelectRollContainer />
    {
      rollSelect ? <RollListContainer /> : null
    }
  </div>
);

ScoreGenView.propTypes = {
  rollSelect: string.isRequired,
};

export default ScoreGenView;
