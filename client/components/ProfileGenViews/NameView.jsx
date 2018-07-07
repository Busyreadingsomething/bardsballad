import React from 'react';
import { func, string } from 'prop-types';

const NameView = ({ setName, value }) => (
  <div className="input-wrapper">
    <input
      data-path="profile-name"
      className="gen-profile-input"
      type="text"
      value={value}
      onChange={e => setName(e)}
    />
    <label className="label">Name</label>
  </div>
);

NameView.propTypes = {
  setName: func.isRequired,
  value: string.isRequired,
};

export default NameView;
