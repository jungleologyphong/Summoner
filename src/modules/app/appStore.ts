import {createSlice, PayloadAction, Selector} from '@reduxjs/toolkit';
import {RootState} from '~modules';

export interface IRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface IApp {
  mode: 'staging' | 'production';
  inSplash?: boolean;
}

const appStore = createSlice({
  name: 'appStore',
  initialState: {
    mode: 'production',
    inSplash: true,
  } as IApp,
  reducers: {
    setMode: (state, action: PayloadAction<'staging' | 'production'>) =>
      Object.assign(state, {mode: action.payload}),
    setSplash: (state, action: PayloadAction<boolean>) =>
      Object.assign(state, {inSplash: action.payload}),
  },
});

interface IMode {
  mode: 'staging' | 'production';
}
export const ModeSelector: Selector<RootState, IMode> = state => {
  return {
    mode: state.appStore.mode,
  };
};

interface ISplash {
  inSplash: boolean;
}
export const SplashSelector: Selector<RootState, ISplash> = state => {
  return {
    inSplash: state.appStore.inSplash !== false,
  };
};

export default appStore;
