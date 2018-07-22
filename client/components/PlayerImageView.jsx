import React from 'react';
import { arrayOf, string, number } from 'prop-types';

const generateIndex = (max, curr) => {
  const ratio = Math.floor((max / curr) * 100);
  switch (ratio) {
    case ratio >= 80:
      return 4;
    case ratio >= 60:
      return 3;
    case ratio >= 40:
      return 2;
    case ratio >= 20:
      return 1;
    default:
      return 0;
  }
};

const PlayerImageView = ({ images, maxHP, currHP }) => {
  const index = generateIndex(maxHP, currHP);
  return (
    <div>
      <img src={images[index]} alt="character" />
    </div>
  );
};

PlayerImageView.propTypes = {
  images: arrayOf(string).isRequired,
  maxHP: number.isRequired,
  currHP: number.isRequired,
};

export default PlayerImageView;
