import React from 'react';
import { arrayOf, object, func } from 'prop-types';
import ALV from './AttributeSelectorViews/AttributeListView';

const AttributeSelectorView = props => (
  <div className="gen-selector-container gen-card animated slideInRight">
    <h1 className="gen-title">Select Your Skills</h1>
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
    <button motion="prev" className="gen-page" onClick={props.selectPage}>PREV</button>
    <button className="gen-submit" onClick={props.genCharacter}>MAKE CHARACTER</button>
  </div>
);

AttributeSelectorView.propTypes = {
  proficiencies: arrayOf(object).isRequired,
  styles: arrayOf(object).isRequired,
  genCharacter: func.isRequired,
  selectPage: func.isRequired,
};

export default AttributeSelectorView;
