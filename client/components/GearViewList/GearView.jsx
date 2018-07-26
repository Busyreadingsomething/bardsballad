import React from 'react';
import PropTypes from 'prop-types';
import ItemView from './ItemView';

const GearView = ({ items }) => (
  <div className="gear-container animated fadeInDown">
    {
      items.map(item => <ItemView key={item.id} item={item} />)
    }
  </div>
);

GearView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GearView;
