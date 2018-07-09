import React from 'react';
import { shape, number, string } from 'prop-types';

const ProfileView = ({
  profile,
  race,
  charClass,
  level,
}) => (
  <div className="profile-container card">
    <div className="player-base">
      <h1 className="player-info">{profile.name}</h1>
      <img className="dragon" src="/assets/dragon.png" alt="dragon" />
    </div>
    <div className="player-base">
      <h3 className="player-info">{charClass} Lv. {level}</h3>
      <h3 className="player-info">{profile.align}</h3>
    </div>
    <div className="player-base">
      <h3 className="player-info">{race}</h3>
      <h3 className="player-info">{profile.age}</h3>
      <h3 className="player-info">{profile.gender}</h3>
    </div>
    <div className="player-base">
      <h3 className="player-info">{profile.height}</h3>
      <h3 className="player-info">{profile.hair}</h3>
      <h3 className="player-info">{profile.eye}</h3>
    </div>
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
