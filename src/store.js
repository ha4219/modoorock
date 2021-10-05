import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const middleware = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
};

middleware.push(createLogger());

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware, thunk),
);
const persistor = persistStore(store);

export {store, persistor};
