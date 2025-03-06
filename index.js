// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import your userReducer

const rootReducer = combineReducers({
  user: userReducer // Combine userReducer under the "user" key
});

export default rootReducer;
