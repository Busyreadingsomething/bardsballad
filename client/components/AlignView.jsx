import React from 'react';
import { func } from 'prop-types';

const AlignView = ({ setAlign }) => (
  <div className="input-wrapper">
    <select className="gen-profile-input" onChange={e => setAlign(e)}>
      <option value=""></option>
      <option value="LAWFUL GOOD">Lawful Good</option>
      <option value="NEUTRAL GOOD">Neutral Good</option>
      <option value="CHAOTIC GOOD">Chaotic Good</option>
      <option value="LAWFUL NEUTRAL">Lawful Neutral</option>
      <option value="NEUTRAL">Neutral</option>
      <option value="CHAOTIC NEUTRAL">Chaotic Neutral</option>
      <option value="LAWFUL EVIL">Lawful Evil</option>
      <option value="NEUTRAL EVIL">Neutral Evil</option>
      <option value="CHAOTIC EVIL">Chaotic Evil</option>
    </select>
    <label className="label"> Alignment:</label>
  </div>
);

AlignView.propTypes = {
  setAlign: func.isRequired,
};

export default AlignView;
