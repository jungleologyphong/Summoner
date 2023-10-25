import {createSlice, PayloadAction, Selector} from '@reduxjs/toolkit';
import {RootState} from '~modules';
import UserEntity from './entity';

interface IStore {
  users: UserEntity;
}

const userStore = createSlice({
  name: 'userStore',
  initialState: {
    users: {
      id: '',
      accountId: '',
      puuid: '',
      name: '',
      profileIconId: 0,
      revisionData: 0,
      summonerLevel: 0,
    },
  } as IStore,
  reducers: {
    setUsers: (state, action: PayloadAction<UserEntity>) => {
      return {
        ...state,
        users: action.payload,
      };
    },
  },
});

export const UserSelector: Selector<RootState, UserEntity> = state => {
  return state.userStore.users;
};

export default userStore;
