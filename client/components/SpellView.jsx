import React from 'react';
import { PropTypes } from 'prop-types';

const SpellView = ({ info }) => (
  <button className="spell-container item-card primary">
    <div className="spell-main-profile">
      <p className="spell-name">{info.name}</p>
      <p className="spell-level">Lv. {info.level}</p>
    </div>
    <div className="spell-secondary-profile">
      <p className="spell-time">{info.time}</p>
      <p className="spell-duration">{info.duration}</p>
      <p className="spell-range">{info.range.join(' ')}</p>
      <p className="spell-save">{info.save}</p>
      <p className="spell-effect">{info.effect}</p>
      {
        info.dieType ? <p className="spell-damange" die={info.dieType} dice={info.dice}>{`${info.dice}d${info.dieType}`}</p> : null
      }
    </div>
    <p className="spell-description">{info.description}</p>
  </button>
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
