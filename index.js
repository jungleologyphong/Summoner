/**
 * @format
 */

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from '~core/store';
import {load} from './src';

const root = () => {
  //  const onBeforeLift = () => {
  //    load().then(rs => {
  //      App();
  //    });
  //  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => root);
LogBox.ignoreAllLogs(true);
