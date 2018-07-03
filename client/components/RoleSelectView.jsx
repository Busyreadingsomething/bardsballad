import React from 'react';
import { func } from 'prop-types';
import ClassContainer from '../containers/ClassContainer';
import AlignContainer from '../containers/AlignContainer';

const RoleSelectView = ({ selectPage }) => (
  <div className="gen-role-container gen-card animated slideInRight">
    <h1 className="gen-title">Select Your Class</h1>
    <ClassContainer />
    <AlignContainer />
    <div className="page-button-list">
      <button motion="prev" className="gen-page" onClick={selectPage}>PREV</button>
      <button motion="next" className="gen-page" onClick={selectPage}>NEXT</button>
    </div>
  </div>
);

RoleSelectView.propTypes = {
  selectPage: func.isRequired,
};

export default RoleSelectView;
