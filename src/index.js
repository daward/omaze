import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppContainer from './containers/appcontainer';
import Winner from './containers/winner';
import './index.css';
import reducers from './reducers/index';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Winner />
      <AppContainer />
    </div>
  </Provider>,
  document.getElementById('root')
);