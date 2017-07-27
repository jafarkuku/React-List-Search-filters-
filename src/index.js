import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware  from 'redux-thunk'
import promise from 'redux-promise'

import App from './App/App'
import './index.css'
import reducers from './App/reducers/index'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
