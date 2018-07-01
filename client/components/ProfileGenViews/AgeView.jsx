import React from 'react';
import { func } from 'prop-types';


const AgeView = ({ setAge }) => (
  <label className="gen-label">Age
    <input
      id="profile-age"
      className="gen-profile-input"
      type="number"
      onKeyUp={e => setAge(e)}
    />
  </label>
);

AgeView.propTypes = {
  setAge: func.isRequired,
};

export default AgeView;
