import React from 'react';
import PropTypes from 'prop-types';
import AttributesContainer from '../../containers/AttributesContainer';

const AttributeListView = ({ attribute, index, prof }) => (
  <div className="gen-attribute-container">
    <h2>{attribute.type}</h2>
    <h4>Select {attribute.rule}</h4>
    <div className="gen-attribute-list">
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
