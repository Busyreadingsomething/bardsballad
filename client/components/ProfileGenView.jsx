import React from 'react';
import { func } from 'prop-types';
import NameContainer from '../containers/NameContainer';
import GenderContainer from '../containers/GenderContainer';
import RaceContainer from '../containers/RaceContainer';
import HeightContainer from '../containers/HeightContainer';
import AgeContainer from '../containers/AgeContainer';
import HairContainer from '../containers/HairContainer';
import EyeContainer from '../containers/EyeContainer';

const ProfileGenView = ({ next }) => (
  <div className="gen-profile">
    <NameContainer />
    <GenderContainer />
    <RaceContainer />
    <HeightContainer />
    <AgeContainer />
    <HairContainer />
    <EyeContainer />
    <button id="profile" onClick={() => next()}>NEXT</button>
  </div>
);

ProfileGenView.propTypes = {
  next: func.isRequired,
};

export default ProfileGenView;
