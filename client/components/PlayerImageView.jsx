import React from 'react';
import { arrayOf, string, number } from 'prop-types';

const PlayerImageView = ({ images, maxHP, currHP }) => {
  return (
    <div>
      <img src="" alt="character" />
    </div>
  );
};

PlayerImageView.propTypes = {
  images: arrayOf(string).isRequired,
  maxHP: number.isRequired,
  currHP: number.isRequired,
};

export default PlayerImageView;
