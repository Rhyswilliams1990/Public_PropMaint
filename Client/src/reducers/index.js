import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TestReducer from './TestReducer';
import PersonReducer from './PersonReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  test: TestReducer,
  people: PersonReducer,
});

export default rootReducer;
