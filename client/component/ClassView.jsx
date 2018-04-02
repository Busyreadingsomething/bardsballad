import React from 'react';

const ClassView = ({ setClassDie }) => (
  <div>
    <label className="gen-class"> Pick a Class:
      <select id="gen-class" onChange={e => setClassDie(e)}>
        <option value="">Select a Class</option>
        <option value="BARBARIAN">Barbarian</option>
        <option value="BARD">Bard</option>
        <option value="CLERIC">Cleric</option>
        <option value="DRUID">Druid</option>
        <option value="FiGHTER">Fighter</option>
        <option value="MONK">Monk</option>
        <option value="PALADIN">Paladin</option>
        <option value="RANGER">Ranger</option>
        <option value="ROGUE">Rogue</option>
        <option value="SORCERROR">Sorcerror</option>
        <option value="WARLOCK">Warlock</option>
        <option value="WIZARD">Wizard</option>
      </select>
    </label>
  </div>
);

export default ClassView;
