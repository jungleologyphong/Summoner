import {combineReducers} from '@reduxjs/toolkit';
import {createWhitelistFilter} from 'redux-persist-transform-filter';

import profileStore from './authentication/profileStore';
import settingStore from './setting/settingStore';

import appStore from './app/appStore';
import userStore from './user/userStore';
import rankedStore from './ranked/rankedStore';
import championMasteryStore from './championMastery/champMasteryStore';

const appReducer = combineReducers({
  appStore: appStore.reducer,
  profileStore: profileStore.reducer,
  settingStore: settingStore.reducer,
  userStore: userStore.reducer,
  rankedStore: rankedStore.reducer,
  championMasteryStore: championMasteryStore.reducer,
});
const profile = createWhitelistFilter('profileStore', ['token', 'user']);
const setting = createWhitelistFilter('settingStore', [
  'language',
  'splash',
  'mode',
]);
const app = createWhitelistFilter('appStore', ['mode']);

export const transforms = [profile, setting, app];
export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
