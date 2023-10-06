import {logger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import appReducer, {RootState, transforms} from '~modules';
import storage from '@react-native-async-storage/async-storage';
import {env_set, name} from '~config';
import {PersistConfig} from 'redux-persist';

const persistConfig: PersistConfig<RootState> = {
  key: env_set[name].APP_NAME,
  storage,
  blacklist: [],
  transforms: transforms,
};
const persistedReducer = persistReducer(persistConfig, appReducer);
const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default store;
