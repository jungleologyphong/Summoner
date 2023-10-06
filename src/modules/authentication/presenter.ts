import store from '~core/store';
import profileStore from './profileStore';
import * as repository from './repository';

const authPresenter = {...repository};

authPresenter.login = async (payload: repository.ILoginDTO) => {
  const token = await repository.login(payload);
  store.dispatch(profileStore.actions.login(token?.deviceToken));
  return token;
};

export default authPresenter;
