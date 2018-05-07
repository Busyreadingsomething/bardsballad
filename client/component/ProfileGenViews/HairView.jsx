import React from 'react';

const HairView = ({ setHair }) => (
  <div>
    <label className="gen-hair" >Hair Color
      <input id="character-profile-hair" type="text" onKeyUp={e => setHair(e)} />
    </label>
  </div>
);

export default HairView;
