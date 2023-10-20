import store from '~core/store';
import * as repository from './repository';
import championMasteryStore from './champMasteryStore';

const championMasteryPresenter = {...repository};

championMasteryPresenter.getChampionMastery = async (
  summonerId: string,
  API_KEY: string,
) => {
  const championMastery = await repository.getChampionMastery(
    summonerId,
    API_KEY,
  );
  store.dispatch(
    championMasteryStore.actions.setChampionMastery(championMastery),
  );
  return championMastery;
};

export default championMasteryPresenter;
