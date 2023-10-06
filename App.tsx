import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import MainRouter from './src/routers';
import _BackgroundTimer from 'react-native-background-timer';
import CodePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import {toastConfig} from '~components';
import {IntlProvider} from 'react-intl';

import {AppLogic} from './src';
import MQTTProvider from '~core/helper/hooks/mqtt';
const App = () => {
  const {language, memoLangData, will, clientId} = AppLogic();

  return (
    <IntlProvider
      locale={language}
      messages={memoLangData}
      textComponent={Text}>
      <MQTTProvider options={{will, clientId}}>
        <SafeAreaView style={styles.container}>
          <MainRouter />
          <Toast config={toastConfig} />
        </SafeAreaView>
      </MQTTProvider>
    </IntlProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CodePush({
  checkFrequency: CodePush?.CheckFrequency?.MANUAL,
})(App);
