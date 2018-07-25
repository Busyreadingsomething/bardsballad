import React from 'react';
import PropTypes from 'prop-types';

const ItemView = ({ item }) => (
  <div className="item-container">
    <p>{item.name}</p>
    <p>{item.proficient}</p>
    <p>{item.description}</p>
    <p>{item.bonus}</p>
  </div>
);

ItemView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    bonus: PropTypes.number,
    dieType: PropTypes.number,
    dice: PropTypes.number,
    description: PropTypes.string,
    proficient: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};

export default ItemView;
