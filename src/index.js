import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './containers/appcontainer';
import Winner from './containers/winner';
import './index.css';
import reducers from './reducers/index';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Winner />
      <AppContainer />
    </div>
  </Provider>,
  document.getElementById('root')
);