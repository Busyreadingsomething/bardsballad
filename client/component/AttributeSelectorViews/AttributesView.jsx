import React from 'react';

const AttributesView = props => (
  <button className="proficiency" onClick={() => props.setAttr(props.index, props.name, props.prof)}>
    <i className="icon" />
    {
      props.name.toUpperCase()
    }
  </button>
);

export default AttributesView;
