import {createSlice, PayloadAction, Selector} from '@reduxjs/toolkit';
import {RootState} from '~modules';
import MatchHistoriesEntity from './entity';

interface IStore {
  matchHistories: MatchHistoriesEntity[];
}

const matchHistoriesStore = createSlice({
  name: 'matchHistoriesStore',
  initialState: {
    matchHistories: null,
  } as any as IStore,
  reducers: {
    setMatchHistory: (state, action: PayloadAction<MatchHistoriesEntity[]>) => {
      return {
        ...state,
        matchHistories: action.payload,
      };
    },
  },
});

export const MatchHistoriesSelector: Selector<
  RootState,
  MatchHistoriesEntity[]
> = state => {
  return state.matchHistoriesStore.matchHistories;
};

export default matchHistoriesStore;
