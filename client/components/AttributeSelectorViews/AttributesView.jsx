import React from 'react';
import PropTypes from 'prop-types';

const AttributesView = props => (
  <button className="proficiency primary-light" onClick={() => props.setAttr(props.index, props.name, props.prof)}>
    <i className="icon" />
    {
      props.name.toUpperCase()
    }
  </button>
);

AttributesView.propTypes = {
  setAttr: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  prof: PropTypes.string.isRequired,
};

export default AttributesView;
