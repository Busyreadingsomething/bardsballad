import React from 'react';
import { number } from 'prop-types';
import ProfileGenContainer from '../containers/ProfileGenContainer';
import ScoreGenContainer from '../containers/ScoreGenContainer';
import RoleSelectContainer from '../containers/RoleSelectContainer';
import AttributeSelectorContainer from '../containers/AttributeSelectorContainer';

const GenerateView = ({ page }) => {
  const list = [ProfileGenContainer, ScoreGenContainer, RoleSelectContainer, AttributeSelectorContainer];
  const CurrentComponent = list[page];
  return (
    <div className="gen-container">
      {
        <CurrentComponent />
      }
    </div>
  );
};

GenerateView.propTypes = {
  page: number.isRequired,
};

export default GenerateView;
