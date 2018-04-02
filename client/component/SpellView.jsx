import React from 'react';

const SpellView = ({ info }) => (
  <div className="spell-container">
    <div className="spell-main-profile">
      <div className="spell-name">{info.name}</div>
      <div className="spell-level">{info.level}</div>
    </div>
    <div className="spell-secondary-profile">
      <div className="spell-time">{info.time}</div>
      <div className="spell-duration">{info.duration}</div>
      <div className="spell-range">{info.range.join(' ')}</div>
      <div className="spell-save">{info.save}</div>
      <div className="spell-effect">{info.effect}</div>
      {
        info.dieType ? <div className="" die={info.dieType} dice={info.dice}>{`${info.dice}d${info.dieType}`}</div> : null
      }
    </div>
    <div className="spell-description">{info.description}</div>
  </div>
);

export default SpellView;
