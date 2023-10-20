import {
  createAction,
  createSlice,
  PayloadAction,
  Selector,
} from '@reduxjs/toolkit';

import {RootState} from '~modules';
import RankedEntity from './entity';

interface IStore {
  ranked: RankedEntity;
}

const rankedStore = createSlice({
  name: 'rankedStore',
  initialState: {
    ranked: null,
  } as any as IStore,
  reducers: {
    setRankedOfUsers: (state, action: PayloadAction<RankedEntity>) => {
      return {
        ...state,
        ranked: action.payload,
      };
    },
  },
});

export const RankedSelector: Selector<RootState, RankedEntity> = state => {
  return state.rankedStore.ranked;
};

export default rankedStore;
