import React from 'react';
import { func } from 'prop-types';
import ClassContainer from '../containers/ClassContainer';
import AlignContainer from '../containers/AlignContainer';

const RoleSelectView = ({ selectPage }) => (
  <div>
    <ClassContainer />
    <AlignContainer />
    <button motion="prev" className="gen-button" onClick={selectPage}>PREV</button>
    <button motion="next" className="gen-button" onClick={selectPage}>NEXT</button>
  </div>
);

RoleSelectView.propTypes = {
  selectPage: func.isRequired,
};

export default RoleSelectView;
