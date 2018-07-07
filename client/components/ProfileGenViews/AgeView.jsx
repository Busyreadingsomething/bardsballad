import React from 'react';
import { func, number } from 'prop-types';


const AgeView = ({ setAge, value }) => (
  <div className="input-wrapper">
    <input
      data-path="profile-age"
      className="gen-profile-input"
      type="number"
      valeu={value}
      onChange={e => setAge(e)}
    />
    <label className="label">Age</label>
  </div>
);

AgeView.propTypes = {
  setAge: func.isRequired,
  value: number.isRequired,
};

export default AgeView;
