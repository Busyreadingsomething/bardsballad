import React from 'react';
import { func } from 'prop-types';

const NameView = ({ setName }) => (
  <div className="input-wrapper">
    <input
      id="profile-name"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setName(e)}
    />
    <label className="label">Character Name</label>
  </div>
);

NameView.propTypes = {
  setName: func.isRequired,
};

export default NameView;
