import { combineReducers } from 'redux';
import clientsReducer from './reducer';

const rootReducer = combineReducers({
  clientsReducer,
});
export default rootReducer;