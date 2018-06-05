import React from 'react';
import ALV from './AttributeSelectorViews/AttributeListView';

const AttributeSelectorView = props => (
  <div className="selector-container">
    {
      props.styles.map(style => <ALV attribute={style} key={style.type} />)
    }
    {
      props.proficiencies.map(attr => <ALV attribute={attr} key={attr.type} />)
    }
  </div>
);

export default AttributeSelectorView;
