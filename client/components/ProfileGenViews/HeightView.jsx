import React from 'react';
import { func } from 'prop-types';

const HeightView = ({ setHeight }) => (
  <div className="input-wrapper">
    <input
      id="profile-height"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setHeight(e)}
    />
    <label className="label"> Height</label>
  </div>
);

HeightView.propTypes = {
  setHeight: func.isRequired,
};

export default HeightView;
