import httpRepository from '~core/http';
import ChampionMasteryEntity from './entity';

export const getChampionMastery = async (
  encryptedSummonerId: string,
): Promise<ChampionMasteryEntity[]> => {
  return await httpRepository.execute({
    path: `https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedSummonerId}?api_key=${'RGAPI-c4a4fcc3-1060-4149-a094-a3f259ac3877'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
