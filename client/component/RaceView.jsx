import React from 'react';

const RaceView = ({ setRaceMods }) => (
  <div className="race-container">
    <label className="gen-race"> Pick a Race:
      <select id="gen-race" onChange={e => setRaceMods(e)}>
        <option value="">Select a Race</option>
        <option value="DRAGONBORNE">Dragonborne</option>
        <option value="DWARF">Dwarf</option>
        <option value="ELF">Elf</option>
        <option value="GNOME">Gnome</option>
        <option value="HALF-ELF">Half Elf</option>
        <option value="HALF-ORC">Half Orc</option>
        <option value="HALFLING">Halfling</option>
        <option value="HUMAN">Human</option>
        <option value="TIEFLING">Tiefling</option>
      </select>
    </label>
  </div>
);

export default RaceView;
