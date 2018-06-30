import React from 'react';
import { func } from 'prop-types';
import NameContainer from '../containers/NameContainer';
import GenderContainer from '../containers/GenderContainer';
import RaceContainer from '../containers/RaceContainer';
import HeightContainer from '../containers/HeightContainer';
import AgeContainer from '../containers/AgeContainer';
import HairContainer from '../containers/HairContainer';
import EyeContainer from '../containers/EyeContainer';

const ProfileGenView = ({ selectPage }) => (
  <div className="gen-profile">
    <NameContainer />
    <GenderContainer />
    <RaceContainer />
    <HeightContainer />
    <AgeContainer />
    <HairContainer />
    <EyeContainer />
    <button id="profile" motion="next" onClick={e => selectPage(e)}>NEXT</button>
  </div>
);

ProfileGenView.propTypes = {
  selectPage: func.isRequired,
};

export default ProfileGenView;
