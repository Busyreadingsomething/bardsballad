import React from 'react';
import { bool } from 'prop-types';
import CharacterView from './CharacterView';
import GenerateContainer from '../containers/GenerateContainer';


const SheetView = ({ madeCharacter }) => (
  <div className="main-container">
    {
      madeCharacter
        ? <CharacterView />
        : <GenerateContainer />
    }
  </div>
);

SheetView.propTypes = {
  madeCharacter: bool.isRequired,
};

export default SheetView;
