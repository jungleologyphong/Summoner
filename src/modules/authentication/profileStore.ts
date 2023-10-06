import {
  createAction,
  createSlice,
  PayloadAction,
  Selector,
} from '@reduxjs/toolkit';
import User from '~modules/user/entity';
import {RootState} from '~modules';
interface IStore {
  statusLogin?: boolean;
  user?: User;
  listPermissionCode?: Array<string>;
}

export const removeProfile = createAction('authentication/removeProfile');
export const setToken = createAction<{token: any; remember: boolean}>(
  'authentication/setToken',
);
interface IStore {
  statusLogin?: boolean;
  user?: User;
  listPermissionCode?: Array<string>;
  token?: string;
}

const profileStore = createSlice({
  name: 'profileStore',
  initialState: {
    statusLogin: false,
    user: null,
    listPermissionCode: [],
    token: null,
  } as any as IStore,
  reducers: {
    fetchProfile: (
      state,
      action: PayloadAction<{user?: User; listPermissionCode?: string[]}>,
    ) => {
      return {
        ...state,
        user: action.payload.user,
        listPermissionCode: action.payload.listPermissionCode || [],
      };
    },
    updateProfile: (
      state,
      action: PayloadAction<{
        listPermissionCode?: string[];
        statusLogin?: boolean;
      }>,
    ) => Object.assign(state, action.payload),
    saveImageGroup: (state, action) => {
      return {
        ...state,
        linkImage: action.payload,
      };
    },
    logOut: (state: any) => {
      return {
        ...state,
        statusLogin: false,
        user: null,
        token: null,
      };
    },
    login: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(removeProfile, (state: any) => {
        return {
          ...state,
          statusLogin: false,
          user: null,
          listPermissionCode: [],
          token: null,
        };
      })
      .addCase(setToken, (state, action) =>
        Object.assign(state, action.payload),
      );
  },
});

interface IToken {
  token?: string;
  statusLogin?: boolean;
}

export const TokenSelector: Selector<RootState, IToken> = state => {
  return {
    token: state.profileStore.token,
    statusLogin: state.profileStore.statusLogin,
  };
};

export default profileStore;
