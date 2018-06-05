import React from 'react';

const AttributesView = props => (
  <button className="proficiency">
    <i className="icon" />
    {
      props.name.toUpperCase()
    }
  </button>
);

export default AttributesView;
