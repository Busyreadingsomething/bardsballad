import React from 'react';
import { func } from 'prop-types';

const NameView = ({ setName }) => (
  <label className="gen-label"> Character Name
    <input
      id="profile-name"
      className="gen-profile-input"
      type="text"
      placeholder="Character Name"
      onKeyUp={e => setName(e)}
    />
  </label>
);

NameView.propTypes = {
  setName: func.isRequired,
};

export default NameView;
