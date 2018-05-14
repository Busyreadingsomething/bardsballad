import React from 'react';
import StatView from './StatView';
import StatButtonContainer from '../containers/StatButtonContainer';

const StatListView = ({ holder, stats }) => (
  <div className="stat-list-container">
    {
      stats.map(stat => <StatView score={holder[stat]} />)
    }
    {
      stats.map(stat => <StatButtonContainer stat={stat} />)
    }
  </div>
);

export default StatListView;
