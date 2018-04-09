import { combineReducers } from 'redux';
import notes from './notes';
import inputs from './inputs';
 
export default combineReducers({
  notes,
  inputs
});
