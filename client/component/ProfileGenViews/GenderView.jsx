import React from 'react';

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

export default GenderView;
