import React from 'react';
import { func } from 'prop-types';


const AgeView = ({ setAge }) => (
  <div className="input-wrapper">
    <input
      id="profile-age"
      className="gen-profile-input"
      type="number"
      onKeyUp={e => setAge(e)}
    />
    <label className="label">Age</label>
  </div>
);

AgeView.propTypes = {
  setAge: func.isRequired,
};

export default AgeView;
