// store.js
import { createStore } from 'redux';
import pollReducer from './reducers';

const store = createStore(pollReducer);

export default store;
