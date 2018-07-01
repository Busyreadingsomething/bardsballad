import React from 'react';
import { func } from 'prop-types';
import ProfileGenContainer from '../containers/ProfileGenContainer';
import ScoreGenContainer from '../containers/ScoreGenContainer';
import RoleSelectContainer from '../containers/RoleSelectContainer';
import AttributeSelectorContainer from '../containers/AttributeSelectorContainer';

const GenerateView = props => (
  <div className="gen-container">
    <ProfileGenContainer />
    <ScoreGenContainer />
    <RoleSelectContainer />
    <AttributeSelectorContainer />
  </div>
);

GenerateView.propTypes = {
  generate: func.isRequired,
};

export default GenerateView;
