/*For IE11*/
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import * as serviceWorker from './serviceWorker';

/*antd-ui import*/
import 'antd/dist/antd.min.css';

/*router import (BrowserRouter 或者 HashRouter)*/
import { BrowserRouter } from 'react-router-dom';

/*axios import*/
import { API_URL } from './shared/Consts';
import axios from 'axios';

/*redux import*/
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import mainReducer from './store/reducer/main';
import newsReducer from './store/reducer/news';
import bannerReducer from './store/reducer/banner';
import { watchNews, watchBanner } from './store/saga';

/*redux settings*/
const rootReducer = combineReducers({
  main: mainReducer,
  news: newsReducer,
  banner: bannerReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(watchNews);
sagaMiddleware.run(watchBanner);

/*axios settings*/
axios.defaults.baseURL = API_URL;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
