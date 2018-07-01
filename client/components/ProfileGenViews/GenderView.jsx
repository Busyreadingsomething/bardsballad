import React from 'react';
import { func } from 'prop-types';

const GenderView = ({ setGender }) => (
  <label className="gen-label"> Gender
    <select
      id="profile-gender"
      className="gen-profile-input"
      onChange={e => setGender(e)}
    >
      <option value="">Select One</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </label>
);

GenderView.propTypes = {
  setGender: func.isRequired,
};

export default GenderView;
