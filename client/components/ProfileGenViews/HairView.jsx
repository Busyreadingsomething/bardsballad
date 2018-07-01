import React from 'react';
import { func } from 'prop-types';

const HairView = ({ setHair }) => (
  <label className="gen-label" >Hair Color
    <input
      id="profile-hair"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setHair(e)}
    />
  </label>
);

HairView.propTypes = {
  setHair: func.isRequired,
};

export default HairView;
