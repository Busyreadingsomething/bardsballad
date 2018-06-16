import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './component/store';
import SheetContainer from './component/containers/SheetContainer';
import SheetView from './component/SheetView';

ReactDOM.render(
  <Provider store={store}>
    <SheetContainer />
  </Provider>,
  document.getElementById('app'),
);
