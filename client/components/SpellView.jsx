import React from 'react';
import { PropTypes } from 'prop-types';

const SpellView = ({ info }) => (
  <div className="spell-container item-card">
    <div className="spell-main-profile">
      <div className="spell-name">{info.name}</div>
      <div className="spell-level">Lv. {info.level}</div>
    </div>
    <div className="spell-secondary-profile">
      <div className="spell-time">{info.time}</div>
      <div className="spell-duration">{info.duration}</div>
      <div className="spell-range">{info.range.join(' ')}</div>
      <div className="spell-save">{info.save}</div>
      <div className="spell-effect">{info.effect}</div>
      {
        info.dieType ? <div className="spell-damange" die={info.dieType} dice={info.dice}>{`${info.dice}d${info.dieType}`}</div> : null
      }
    </div>
    <div className="spell-description">{info.description}</div>
  </div>
);

SpellView.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    time: PropTypes.string,
    duration: PropTypes.string,
    range: PropTypes.array,
    save: PropTypes.string,
    effect: PropTypes.string,
    dieType: PropTypes.number,
    dice: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default SpellView;
