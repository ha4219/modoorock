import {combineReducers} from 'redux';

import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default (state, action) =>
  action.type === 'USER_LOGOUT'
    ? rootReducer({}, action)
    : rootReducer(state, action);
