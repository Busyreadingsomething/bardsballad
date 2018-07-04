import React from 'react';
import { func } from 'prop-types';

const GenderView = ({ setGender }) => (
  <div className="input-wrapper">
    <select
      id="profile-gender"
      className="gen-profile-input"
      onChange={e => setGender(e)}
    >
      <option value=""></option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <label className="label">Gender</label>
  </div>
);

GenderView.propTypes = {
  setGender: func.isRequired,
};

export default GenderView;
