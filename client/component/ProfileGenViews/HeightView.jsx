import React from 'react';

const HeightView = ({ setHeight }) => (
  <div className="gen-name-container">
    <label className="gen-height"> Height:
      <input id="profile-height" type="text" onKeyUp={e => setHeight(e)} />
    </label>
  </div>
);

export default HeightView;
