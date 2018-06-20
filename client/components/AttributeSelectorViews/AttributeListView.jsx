import React from 'react';
import PropTypes from 'prop-types';
import AttributesContainer from '../../containers/AttributesContainer';

const AttributeListView = ({ attribute, index, prof }) => (
  <div className="attribute-container">
    <h1>{attribute.type}</h1>
    <h3>Select {attribute.rule}</h3>
    {
      attribute.list.map(attr => (
        <AttributesContainer
          name={attr}
          key={attr}
          index={index}
          prof={prof}
        />))
    }
  </div>
);

AttributeListView.propTypes = {
  attribute: PropTypes.shape({
    type: PropTypes.string,
    rule: PropTypes.number,
    list: PropTypes.array,
  }).isRequired,
  index: PropTypes.number.isRequired,
  prof: PropTypes.string.isRequired,
};

export default AttributeListView;
