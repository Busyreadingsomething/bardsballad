import React from 'react';
import { arrayOf, object } from 'prop-types';
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

AttributeSelectorView.propTypes = {
  proficiencies: arrayOf(object).isRequired,
  styles: arrayOf(object).isRequired,
};

export default AttributeSelectorView;
