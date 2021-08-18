import { createStore, combineReducers } from 'redux';
import myReducer from '../reducers/myReducer';

const rootReducer = combineReducers({ myReducer });
export const store = createStore(rootReducer);