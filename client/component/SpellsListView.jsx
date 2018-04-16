import React from 'react';
import SpellView from './SpellView';

const SpellsListView = ({ spells }) => (
  <div className="spells-container">
    SPELLS:
    {
      spells.map(spell => <SpellView key={spell.id} info={spell} />)
    }
  </div>
);

export default SpellsListView;
