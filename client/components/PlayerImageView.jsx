import React from 'react';
import { arrayOf, string, number } from 'prop-types';

const generateIndex = (max, curr) => {
  const ratio = Math.floor((curr / max) * 100);

  if (ratio >= 80) {
    return 3;
  } else if (ratio >= 50) {
    return 2;
  } else if (ratio >= 20) {
    return 1;
  }

  return 0;
};

const PlayerImageView = ({ images, maxHP, currHP }) => {
  const index = generateIndex(maxHP, currHP);
  return (
    <div className="player-image-container">
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
