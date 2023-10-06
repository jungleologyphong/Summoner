import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
// import { configTranslation } from '~helper/translate';
import {LanguageSelector} from '~modules/setting/settingStore';
import Crash, {UserConfirmation} from 'appcenter-crashes';
import AppCenter from 'appcenter';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import {locale} from '~language';
import {randIdCreator} from '~core';

export const AppLogic = () => {
  const {language}: any = useSelector(LanguageSelector);
  const clientId = React.useMemo(
    () => randIdCreator().replace(/[^a-zA-Z0-9]+/g, ''),
    [],
  );
  const will = React.useMemo(() => {
    if (!clientId) {
      return undefined;
    }
    return {
      topic: 'h2/will',
      msg: {status: 0, mgw_id: clientId},
    };
  }, [clientId]);

  const memoLangData = React.useMemo(() => {
    return locale[language || 'en'];
  }, [language]);

  useEffect(() => {
    if (!__DEV__) {
      Crash.setEnabled(true).then(() => {
        Crash.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND);
      });
    }
  }, []);

  return {memoLangData, language, will, clientId};
};
