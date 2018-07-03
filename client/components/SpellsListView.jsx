import React from 'react';
import { arrayOf, object } from 'prop-types';
import SpellView from './SpellView';

const SpellsListView = ({ spells }) => (
  <div className="spells-container card">
    SPELLS:
    <div className="item-list">
      {
        spells.map(spell => <SpellView key={spell.id} info={spell} />)
      }
    </div>
  </div>
);

SpellsListView.propTypes = {
  spells: arrayOf(object).isRequired,
};

export default SpellsListView;
