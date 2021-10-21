import {combineReducers} from 'redux';

import auth from './auth';
import tour from './tour';

const rootReducer = combineReducers({
  auth,
  tour,
});

export default (state, action) =>
  action.type === 'USER_LOGOUT'
    ? rootReducer({}, action)
    : rootReducer(state, action);
