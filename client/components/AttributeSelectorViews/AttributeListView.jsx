import React from 'react';
import PropTypes from 'prop-types';
import AttributesContainer from '../../containers/AttributesContainer';

const AttributeListView = props => (
  <div className="attribute-container">
    <h1>{props.attribute.type}</h1>
    <h3>Select {props.attribute.rule}</h3>
    {
      props.attribute.list.map(attr => (
        <AttributesContainer
          name={attr}
          key={attr}
          index={props.index}
          prof={props.prof}
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
