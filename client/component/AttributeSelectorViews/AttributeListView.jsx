import React from 'react';
import AV from './AttributesView';

const AttributeListView = props => (
  <div className="attribute-container">
    <h1>{props.attribute.type}</h1>
    <h3>Select {props.attribute.rule}</h3>
    {
      props.attribute.list.map(attr => <AV name={attr} />)
    }
  </div>
);

export default AttributeListView;
