import React from 'react';
import ModView from './ModView';

const ModListView = ({ mods, stats }) => (
  <div className="mode-list-container">
    {
      stats.map(stat => <ModView mod={mods[stat]} />)
    }
  </div>
);

export default ModListView;
