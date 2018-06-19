import React from 'react';
import { func } from 'prop-types';

const EyeView = ({ setEyes }) => (
  <div className="gen-eye-container">
    <label className="gen-eye" >Eye Color
      <input id="profile-eye" type="text" onKeyUp={e => setEyes(e)} />
    </label>
  </div>
);

EyeView.propTypes = {
  setEyes: func.isRequired,
};

export default EyeView;
