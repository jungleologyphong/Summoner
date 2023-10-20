import {API_KEY} from './../../config/index';
import store from '~core/store';
import * as repository from './repository';
import userStore from './userStore';
import rankedStore from '~modules/ranked/rankedStore';

const userPresenter = {...repository};

userPresenter.getProfileConfig = async (
  summonerName: string,
  API_KEY: string,
) => {
  const users = await repository.getProfileConfig(summonerName, API_KEY);

  store.dispatch(userStore.actions.setUsers(users));

  return users;
};

userPresenter.getRankFromUser = async (
  encryptedSummonerId: string,
  API_KEY: string,
) => {
  const ranked = await repository.getRankFromUser(encryptedSummonerId, API_KEY);

  store.dispatch(rankedStore.actions.setRankedOfUsers(ranked[0]));

  return ranked;
};

export default userPresenter;
