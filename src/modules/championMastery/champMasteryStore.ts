import {createSlice, PayloadAction, Selector} from '@reduxjs/toolkit';
import {RootState} from '~modules';
import ChampionMasteryEntity from './entity';

interface IStore {
  championMastery: ChampionMasteryEntity[];
}

const championMasteryStore = createSlice({
  name: 'championMasteryStore',
  initialState: {
    championMastery: null,
  } as any as IStore,
  reducers: {
    setChampionMastery: (
      state,
      action: PayloadAction<ChampionMasteryEntity[]>,
    ) => {
      return {
        ...state,
        championMastery: action.payload,
      };
    },
  },
});

export const ChampionMasterySelector: Selector<
  RootState,
  ChampionMasteryEntity[]
> = state => {
  return state.championMasteryStore.championMastery;
};

export default championMasteryStore;
