import React from 'react';

const RaceView = ({ setRace }) => (
  <div className="gen-race-container">
    <label className="gen-race"> Race:
      <select id="gen-race" onChange={e => setRace(e)}>
        <option value="">Select a Race</option>
        <option value="dragonborne">Dragonborne</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
        <option value="gnome">Gnome</option>
        <option value="half-elf">Half Elf</option>
        <option value="half-orc">Half Orc</option>
        <option value="halfing">Halfling</option>
        <option value="human">Human</option>
        <option value="tiefling">Tiefling</option>
      </select>
    </label>
  </div>
);

export default RaceView;
