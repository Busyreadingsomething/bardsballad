import React from 'react';
import { func } from 'prop-types';

const HeightView = ({ setHeight }) => (
  <div className="gen-name-container">
    <label className="gen-height"> Height:
      <input id="profile-height" type="text" onKeyUp={e => setHeight(e)} />
    </label>
  </div>
);

HeightView.propTypes = {
  setHeight: func.isRequired,
};

export default HeightView;
