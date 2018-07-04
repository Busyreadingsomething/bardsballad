import React from 'react';
import { func } from 'prop-types';

const HairView = ({ setHair }) => (
  <div className="input-wrapper">
    <input
      id="profile-hair"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setHair(e)}
    />
    <label className="label" >Hair Color</label>
  </div>
);

HairView.propTypes = {
  setHair: func.isRequired,
};

export default HairView;
