import React from 'react';
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

export default SheetView;
