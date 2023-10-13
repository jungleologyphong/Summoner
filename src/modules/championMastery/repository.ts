import httpRepository from '~core/http';
import ChampionMasteryEntity from './entity';

export const getChampionMastery = async (
  encryptedSummonerId: string,
): Promise<ChampionMasteryEntity[]> => {
  return await httpRepository.execute({
    path: `https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedSummonerId}?api_key=${'RGAPI-16c12d55-a6f0-4560-af4a-3573efa2c026'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
