import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';  // Import the rootReducer

const store = createStore(
  rootReducer, // Add your rootReducer here
  applyMiddleware(thunk)
);

export default store;
