import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './component/store';
import SheetView from './component/SheetView';

ReactDOM.render(
  <Provider store={store}>
    <SheetView />
  </Provider>,
  document.getElementById('app'),
);
