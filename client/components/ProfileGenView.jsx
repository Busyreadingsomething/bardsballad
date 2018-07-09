import React from 'react';
import { func } from 'prop-types';
import NameContainer from '../containers/NameContainer';
import GenderContainer from '../containers/GenderContainer';
import RaceContainer from '../containers/RaceContainer';
import HeightContainer from '../containers/HeightContainer';
import AgeContainer from '../containers/AgeContainer';
import HairContainer from '../containers/HairContainer';
import EyeContainer from '../containers/EyeContainer';

const ProfileGenView = ({ selectPage }) => {
  const list = [
    NameContainer,
    GenderContainer,
    RaceContainer,
    HeightContainer,
    AgeContainer,
    HairContainer,
    EyeContainer,
  ];

  const key = [
    'Name',
    'Gender',
    'Race',
    'Height',
    'Age',
    'Hair',
    'Eye',
  ];

  return (
    <div className="gen-profile-container gen-card animated slideInRight">
      {
        list.map((Component, index) => <Component key={key[index]} />)
      }
      <button
        id="profile"
        className="gen-page primary"
        motion="next"
        onClick={e => selectPage(e)}
      >
        NEXT
      </button>
    </div>
  );
};

ProfileGenView.propTypes = {
  selectPage: func.isRequired,
};

export default ProfileGenView;
