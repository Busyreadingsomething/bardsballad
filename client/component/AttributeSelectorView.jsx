import React from 'react';
import ALV from './AttributeSelectorViews/AttributeListView';

const list = {
  type: 'Bard Skills',
  rule: 2,
  list: ['PLANTING', 'FAKE', 'DATA'],
};

const list2 = {
  type: 'RACE Skills',
  rule: 1,
  list: ['ONLY', 'ONE', 'DATA'],
};

const list3 = {
  type: 'OTHER Skills',
  rule: 2,
  list: ['THIS', 'MIGHT', 'BE', 'USED'],
};

const AttributeSelectorView = props => (
  <div className="selector-container">
    <ALV attribute={list} />
    <ALV attribute={list2} />
    <ALV attribute={list3} />
  </div>
);

export default AttributeSelectorView;
