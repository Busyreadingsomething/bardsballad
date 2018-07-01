import React from 'react';
import { func } from 'prop-types';

const EyeView = ({ setEyes }) => (
  <label className="gen-label" >Eye Color
    <input
      id="profile-eye"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setEyes(e)}
    />
  </label>
);

EyeView.propTypes = {
  setEyes: func.isRequired,
};

export default EyeView;
