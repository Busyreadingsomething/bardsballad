import React from 'react';
import { func } from 'prop-types';

const GenderView = ({ setGender }) => (
  <div>
    <label className="gen-gender"> Gender
      <select id="profile-gender" onChange={e => setGender(e)}>
        <option value="">Select One</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </label>
  </div>
);

GenderView.propTypes = {
  setGender: func.isRequired,
};

export default GenderView;
