import React from 'react';
import { bool, func } from 'prop-types';
import GenerateView from './GenerateView';
import CharacterView from './CharacterView';


const SheetView = props => (
  <div className="main-container">
    {
      props.madeCharacter
        ? <CharacterView />
        : <GenerateView generate={props.genCharacter} />
    }
  </div>
);

SheetView.propTypes = {
  madeCharacter: bool.isRequired,
  genCharacter: func.isRequired,
};

export default SheetView;
