import httpRepository from '~core/http';
import ChampionMasteryEntity from './entity';

export const getChampionMastery = async (
  encryptedSummonerId: string,
): Promise<ChampionMasteryEntity[]> => {
  return await httpRepository.execute({
    path: `https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedSummonerId}?api_key=${'RGAPI-e79b9f2d-07d3-48ec-84b7-f0e92e14bfa1'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
