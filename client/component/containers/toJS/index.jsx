import React from 'react';
import { Iterable } from 'immutable';

const toJS = Component => (props) => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = Object.entries(props)
    .reduce((newProps, prop) => {
      newProps[prop[KEY]] = Iterable.isIterable(prop[VALUE])
        ? prop[VALUE].toJS()
        : prop[VALUE];
      return newProps;
    }, {});
  return <Component {...propsJS} />;
};

export default toJS;
