import {combineReducers} from 'redux';

import auth from './auth';
import tour from './tour';
import mission from './mission';

const rootReducer = combineReducers({
  auth,
  tour,
  mission,
});

export default (state, action) =>
  action.type === 'USER_LOGOUT'
    ? rootReducer({}, action)
    : rootReducer(state, action);
