import React from 'react';
import PropTypes from 'prop-types';

const HalfElfPointView = props => (
  <div className="point-view">
    <p className="point-value">{props.val}</p>
    <button
      className="point-button"
      onClick={props.selectElfPoint}
    >
      {props.ability}
    </button>
  </div>
);

HalfElfPointView.propTypes = {
  val: PropTypes.number.isRequired,
  ability: PropTypes.string.isRequired,
  selectElfPoint: PropTypes.func.isRequired,
};

export default HalfElfPointView;
