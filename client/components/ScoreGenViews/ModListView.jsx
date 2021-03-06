import React from 'react';
import PropTypes from 'prop-types';
import ModView from './ModView';

const ModListView = ({ mods, stats }) => (
  <div className="mod-list-container">
    {
      stats.map(stat => <ModView mod={mods[stat]} key={stat} />)
    }
  </div>
);

ModListView.propTypes = {
  mods: PropTypes.shape({
    str: PropTypes.number,
    dex: PropTypes.number,
    con: PropTypes.number,
    int: PropTypes.number,
    wis: PropTypes.number,
    cha: PropTypes.number,
  }).isRequired,
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModListView;
