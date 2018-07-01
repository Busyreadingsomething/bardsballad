import React from 'react';
import { func } from 'prop-types';

const HeightView = ({ setHeight }) => (
  <label className="gen-label"> Height:
    <input
      id="profile-height"
      className="gen-profile-input"
      type="text"
      onKeyUp={e => setHeight(e)}
    />
  </label>
);

HeightView.propTypes = {
  setHeight: func.isRequired,
};

export default HeightView;
