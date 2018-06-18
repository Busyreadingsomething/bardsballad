import React from 'react';
import { func } from 'prop-types';

const NameView = ({ setName }) => (
  <div className="gen-name-container">
    <label className="gen-name"> Character Name:
      <input id="profile-name" type="text" onKeyUp={e => setName(e)} />
    </label>
  </div>
);

NameView.propTypes = {
  setName: func.isRequired,
};

export default NameView;
