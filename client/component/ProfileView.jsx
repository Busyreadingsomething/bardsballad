import React from 'react';

const ProfileView = ({ profile, level }) => (
  <div className="profile-row">
    <div className="player-base">
      <div className="player-name">{profile.name}</div>
      <div className="player-level">{level}</div>
    </div>
    <div className="player-race">{profile.race}</div>
    <div className="player-class">{profile.class}</div>
    <div className="player-alignment">{profile.alignment}</div>
  </div>
);

export default ProfileView;
