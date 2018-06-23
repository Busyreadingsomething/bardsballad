import React from 'react';
import PropTypes from 'prop-types';
import HEPV from './HalfElfPointView';

const HalfElfAbilityList = props => (
  <div className="half-elf-point-container">
    {
      props.abilities.map(ability => <HEPV val={props.score[ability]} ability={ability} key={ability} />)
    }
  </div>  
);

HalfElfAbilityList.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  score: PropTypes.shape({
    str: PropTypes.number,
    dex: PropTypes.number,
    con: PropTypes.number,
    int: PropTypes.number,
    wis: PropTypes.number,
    cha: PropTypes.number,
  }).isRequired,
};

export default HalfElfAbilityList;
