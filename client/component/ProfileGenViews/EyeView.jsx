import React from 'react';

const EyeView = ({ setEyes }) => (
  <div className="gen-eye-container">
    <label className="gen-eye" >Eye Color
      <input id="character-profile-eye" type="text" onKeyUp={e => setEyes(e)} />
    </label>
  </div>
);

export default EyeView;
