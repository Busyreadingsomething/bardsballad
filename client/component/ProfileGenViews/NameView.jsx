import React from 'react';

const NameView = ({ setName }) => (
  <div className="gen-name-container">
    <label className="gen-name"> Character Name:
      <input id="character-profile-name" type="text" onKeyUp={e => setName(e)} />
    </label>
  </div>
);

export default NameView;
