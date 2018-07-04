import React from 'react';
import { func } from 'prop-types';

const EyeView = ({ setEyes }) => (
  <div className="input-wrapper">
    <input
      id="profile-eye"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setEyes(e)}
    />
    <label className="label" >Eye Color</label>
  </div>
);

EyeView.propTypes = {
  setEyes: func.isRequired,
};

export default EyeView;
