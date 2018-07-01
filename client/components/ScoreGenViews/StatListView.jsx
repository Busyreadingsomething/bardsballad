import React from 'react';
import PropTypes from 'prop-types';
import StatView from './StatView';
import StatButtonContainer from '../../containers/StatButtonContainer';

const StatListView = ({ holder, stats }) => (
  <div className="gen-stat-container">
    <div className="gen-stat-list">
      {
        stats.map(stat => <StatView score={holder[stat]} />)
      }
    </div>
    <div className="gen-stat-buttons">
      {
        stats.map(stat => <StatButtonContainer stat={stat} />)
      }
    </div>
  </div>
);

StatListView.propTypes = {
  holder: PropTypes.shape({
    str: PropTypes.object,
    dex: PropTypes.object,
    con: PropTypes.object,
    int: PropTypes.object,
    wis: PropTypes.object,
    cha: PropTypes.object,
  }).isRequired,
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StatListView;
