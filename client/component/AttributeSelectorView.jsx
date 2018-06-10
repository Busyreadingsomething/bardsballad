import React from 'react';
import ALV from './AttributeSelectorViews/AttributeListView';

const AttributeSelectorView = props => (
  <div className="selector-container">
    {
      props.proficiencies.map((attr, index) => (
        <ALV
          attribute={attr}
          key={attr.type}
          prof="proficiencies"
          index={index}
        />))
    }
    {
      props.styles.map((style, index) => (
        <ALV
          attribute={style}
          key={style.type}
          prof="style"
          index={index}
        />))
    }
  </div>
);

export default AttributeSelectorView;
