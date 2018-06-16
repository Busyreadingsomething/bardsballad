import React from 'react';
import { shape, number, string } from 'prop-types';

const ProfileView = ({
  profile,
  race,
  charClass,
  level,
}) => (
  <div className="profile-container">
    <div className="player-base">
      <div className="player-name">{profile.name}</div>
      <div className="player-level">Lv. {level}</div>
    </div>
    <div className="player-gender">{profile.gender}</div>
    <div className="player-race">{race}</div>
    <div className="player-age">{profile.age}</div>
    <div className="player-height">{profile.height}</div>
    <div className="player-hair">{profile.hair}</div>
    <div className="player-eyes">{profile.eye}</div>
    <div className="player-class">{charClass}</div>
    <div className="player-alignment">{profile.align}</div>
  </div>
);

ProfileView.propTypes = {
  profile: shape({
    name: string,
    gender: string,
    age: number,
    height: string,
    hair: string,
    align: string,
  }).isRequired,
  level: number.isRequired,
  charClass: string.isRequired,
  race: string.isRequired,
};

export default ProfileView;
