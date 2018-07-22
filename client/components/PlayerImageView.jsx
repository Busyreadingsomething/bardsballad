import React from 'react';
import { arrayOf, string } from 'prop-types';

const PlayerImageView = ({ images }) => {
  
  return (
    <div>
      <img src="" />
    </div>
  )
};

PlayerImageView.propTypes = {
  images: arrayOf(string).isRequired,
};

export default PlayerImageView;
