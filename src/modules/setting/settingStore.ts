import {
  createAction,
  createSlice,
  PayloadAction,
  Selector,
} from '@reduxjs/toolkit';
import {RootState} from '~modules';
interface IStore {
  language: string;
  mode: string;
  splashLoad: boolean;
  mqttConnected: boolean;
}
export const setMqttConnected = createAction<any>('setting/setConnected');

const settingStore = createSlice({
  name: 'settingStore',
  initialState: {
    language: 'en',
    mode: 'production',
    splashLoad: false,
    mqttConnected: false,
  } as IStore,
  reducers: {
    updateLanguage: (state, action: PayloadAction<string>) =>
      Object.assign(state, {language: action.payload}),
    setSplash: (state, action: PayloadAction) => {
      return {
        ...state,
        splashLoad: true,
      };
    },
    setMode: (state, action: PayloadAction<string>) =>
      Object.assign(state, {mode: action.payload}),
    setMqttConnected: (state, action: any) =>
      Object.assign(state, {mqttConnected: action.payload}),
  },
  extraReducers: builder => {
    builder.addCase(setMqttConnected, (state: any, action) => {
      return {
        ...state,
        mqttConnected: action?.payload,
      };
    });
  },
});

interface ILang {
  language: string;
}
export const LanguageSelector: Selector<RootState, ILang> = state => {
  return {
    language: state.settingStore.language,
  };
};
interface ICodePush {
  mode: string;
  splash: boolean;
}
export const CodePushSelector: Selector<RootState, ICodePush> = state => {
  return {
    mode: state.settingStore.mode,
    splash: state.settingStore.splashLoad,
  };
};
interface IMqtt {
  mqttConnected: boolean;
}
export const MqttSelector: Selector<RootState, IMqtt> = state => {
  return {
    mqttConnected: state.settingStore.mqttConnected,
  };
};

export default settingStore;
