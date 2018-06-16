import React from 'react';
import { func } from 'prop-types';
import ProfileGenView from './ProfileGenView';
import ScoreGenContainer from './containers/ScoreGenContainer';
import ClassContainer from './containers/ClassContainer';
import AlignContainer from './containers/AlignContainer';
import AttributeSelectorContainer from './containers/AttributeSelectorContainer';

const GenerateView = props => (
  <div className="gen-container">
    <ProfileGenView />
    <ScoreGenContainer />
    <div className="gen-dropdowns">
      <ClassContainer />
      <AlignContainer />
    </div>
    <AttributeSelectorContainer />
    <button className="gen-submit" onClick={props.generate}>SUBMIT</button>
  </div>
);

GenerateView.propTypes = {
  generate: func.isRequired,
};

export default GenerateView;
