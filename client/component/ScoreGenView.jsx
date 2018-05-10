import React from 'react';
import StatListView from './ScoreGenViews/StatListView';
import ModListView from './ScoreGenViews/ModListView';
import RollListView from './ScoreGenViews/RollListView';
import RollListContainer from './containers/RollListContainer';

const ScoreGenView = props => (
  <div className="score-gen-container">
    <div>
      <StatListView />
    </div>
    <ModListView />
    <RollListContainer />
    <div>
      <button>REROLL</button>
      <button>SUBMIT</button>
    </div>
  </div>
);

export default ScoreGenView;
