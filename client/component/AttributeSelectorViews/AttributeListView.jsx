import React from 'react';
import AV from './AttributesView';
import AttributesContainer from '../containers/AttributesContainer';

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

export default AttributeListView;
