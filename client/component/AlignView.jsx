import React from 'react';

const AlignView = ({ setAlign }) => (
  <div>
    <label className="gen-align"> Pick a Class:
      <select id="gen-align" onChange={e => setAlign(e)}>
        <option value="">Select an Alignment</option>
        <option value="LAWFUL GOOD">Lawful Good</option>
        <option value="NEUTRAL GOOD">Neutral Good</option>
        <option value="CHAOTIC GOOD">Chaotic Good</option>
        <option value="LAWFUL NUETRAL">Lawful Neutral</option>
        <option value="NUETRAL">Neutral</option>
        <option value="CHAOTIC NUETRAL">Chaotic Neutral</option>
        <option value="LAWFUL EVIL">Lawful Evil</option>
        <option value="NEUTRAL EVIL">Neutral Evil</option>
        <option value="CHAOTIC EVIL">Chaotic Evil</option>
      </select>
    </label>
  </div>
);

export default AlignView;
