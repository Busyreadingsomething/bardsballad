import React from 'react';
import { func, string } from 'prop-types';

const HeightView = ({ setHeight, value }) => (
  <div className="input-wrapper">
    <input
      id="profile-height"
      className="gen-profile-input"
      type="text"
      value={value}
      onChange={e => setHeight(e)}
    />
    <label className="label">Height</label>
  </div>
);

HeightView.propTypes = {
  setHeight: func.isRequired,
  value: string.isRequired,
};

export default HeightView;
