import React from 'react';
import { func, string } from 'prop-types';

const GenderView = ({ setGender, value }) => {
  const focused = value === '' ? 'empty' : 'focused';
  return (
    <div className="input-wrapper">
      <select
        id="profile-gender"
        className="gen-profile-input"
        value={value}
        onChange={e => setGender(e)}
      >
        <option value="" />
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label className={`select-label ${focused}`}>Gender</label>
    </div>
  )
};

GenderView.propTypes = {
  setGender: func.isRequired,
  value: string.isRequired,
};

export default GenderView;
