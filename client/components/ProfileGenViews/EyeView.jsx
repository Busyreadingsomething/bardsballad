import React from 'react';
import { func, string } from 'prop-types';

const EyeView = ({ setEyes, value }) => (
  <div className="input-wrapper">
    <input
      id="profile-eye"
      className="gen-profile-input"
      type="text"
      value={value}
      onChange={e => setEyes(e)}
    />
    <label className="label">Eye Color</label>
  </div>
);

EyeView.propTypes = {
  setEyes: func.isRequired,
  value: string.isRequired,
};

export default EyeView;
