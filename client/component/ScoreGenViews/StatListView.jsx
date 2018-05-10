import React from 'react';
import StatView from './StatView';
import StatButtonView from './StatButtonView';

const StatListView = props => (
  <div className="stat-list-container">
    <StatView />
    <StatButtonView />
  </div>
);

export default StatListView;
