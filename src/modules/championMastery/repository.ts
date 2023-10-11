import httpRepository from '~core/http';
import ChampionMasteryEntity from './entity';

export const getChampionMastery = async (
  encryptedSummonerId: string,
): Promise<ChampionMasteryEntity[]> => {
  return await httpRepository.execute({
    path: `https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedSummonerId}?api_key=${'RGAPI-e455d155-4a8d-48f0-a24a-0d7feae010de'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
