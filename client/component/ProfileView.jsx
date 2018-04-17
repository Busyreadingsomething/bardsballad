import React from 'react';

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
    <div className="player-class">{charClass}</div>
    <div className="player-alignment">{profile.align}</div>
  </div>
);

export default ProfileView;
