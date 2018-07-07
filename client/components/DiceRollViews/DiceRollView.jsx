import React from 'react';
import { number } from 'prop-types';

const DiceRollView = ({ die, dice }) => {
  const total = dice * Math.ceil(Math.random() * die);
  return (
    <div className="overlay">
      <div className="animated bounce">
        <h1 className="roll animated slideInRight">
          { 
            total
          }
        </h1>
      </div>
    </div>
  );
};

DiceRollView.propTypes = {
  die: number.isRequired,
  dice: number.isRequired,
};

export default DiceRollView;
