import httpRepository from '~core/http';
import ChampionMasteryEntity from './entity';

export const getChampionMastery = async (
  encryptedSummonerId: string,
): Promise<ChampionMasteryEntity[]> => {
  return await httpRepository.execute({
    path: `https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedSummonerId}?api_key=${'RGAPI-686ac0e5-2465-4b30-84a0-8cb287d15ebf'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
