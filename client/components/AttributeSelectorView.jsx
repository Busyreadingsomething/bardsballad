import React from 'react';
import { arrayOf, object, func } from 'prop-types';
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
    <button className="gen-submit" onClick={props.genCharacter}>SUBMIT</button>
  </div>
);

AttributeSelectorView.propTypes = {
  proficiencies: arrayOf(object).isRequired,
  styles: arrayOf(object).isRequired,
  genCharacter: func.isRequired,
};

export default AttributeSelectorView;
