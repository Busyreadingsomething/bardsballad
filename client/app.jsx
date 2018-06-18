import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SheetContainer from './containers/SheetContainer';

ReactDOM.render(
  <Provider store={store}>
    <SheetContainer />
  </Provider>,
  document.getElementById('app'),
);
