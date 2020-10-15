import "./wdyr";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import thunkMiddleware from "redux-thunk";
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';
import {searchRobots, requestRobots} from "./reducers/searchReducer"
import App from "./App";
import "tachyons";
import "./index.css";
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({searchRobots, requestRobots})
// const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register()
