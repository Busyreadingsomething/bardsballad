import React from 'react';

const AgeView = ({ setAge }) => (
  <div>
    <label className="gen-age">Age
      <input id="profile-age" type="number" onKeyUp={e => setAge(e)} />
    </label>
  </div>
);

export default AgeView;
