import React from 'react';
import { func, string } from 'prop-types';

const HairView = ({ setHair, value }) => (
  <div className="input-wrapper">
    <input
      data-path="profile-hair"
      className="gen-profile-input"
      type="text"
      value={value}
      onChange={e => setHair(e)}
    />
    <label className="label">Hair Color</label>
  </div>
);

HairView.propTypes = {
  setHair: func.isRequired,
  value: string.isRequired,
};

export default HairView;
