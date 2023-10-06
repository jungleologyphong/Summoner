/* eslint-disable indent */
import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import CodePush from 'react-native-code-push';
import {useDispatch, useSelector} from 'react-redux';
import {env_set, name} from '~config';
import settingStore, {CodePushSelector} from '~modules/setting/settingStore';
export const SplashLogic = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector(CodePushSelector);
  const [label, setLabel] = React.useState('');
  const [codePushSuccess, setCodePushSuccess] = React.useState(false);
  const isFocus = useIsFocused();

  React.useEffect(() => {
    if (!__DEV__) {
      const deploymentKey: string = env_set[name].codePush[mode];
      setTimeout(() => {
        CodePush.sync(
          deploymentKey
            ? {
                deploymentKey,
              }
            : {},
          codePushStatusDidChange,
        );
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(settingStore.actions.setSplash());
      }, 1000);
    }
  }, []);

  const codePushStatusDidChange = (syncStatus: number) => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setLabel(env_set[name].fvers);
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setLabel('downloading package.');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setLabel('awaiting user action.');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setLabel('installing update.');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        setLabel(env_set[name].fvers);
        setCodePushSuccess(true);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setLabel('update cancelled by user.');
        setCodePushSuccess(true);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setLabel('update installed and will be applied on restart.');
        setTimeout(() => {
          CodePush.restartApp();
        }, 1000);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        setLabel('an unknown error occurred.');
        setCodePushSuccess(true);
        break;
      default:
        setLabel(env_set[name].fvers);
        setCodePushSuccess(true);
        break;
    }
  };

  React.useEffect(() => {
    if (codePushSuccess) {
      dispatch(settingStore.actions.setSplash());
    }
  }, [codePushSuccess]);

  return {
    label,
    mode,
    isFocus,
  };
};
