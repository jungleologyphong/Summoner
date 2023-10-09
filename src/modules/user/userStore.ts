import {
  createAction,
  createSlice,
  PayloadAction,
  Selector,
} from '@reduxjs/toolkit';

import {RootState} from '~modules';
import UserEntity from './entity';

interface IStore {
  users: UserEntity;
}

const userStore = createSlice({
  name: 'userStore',
  initialState: {
    users: null,
  } as any as IStore,
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
