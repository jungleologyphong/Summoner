import UserEntity from './entity';
import httpRepository from '~core/http';
import RankedEntity from '~modules/ranked/entity';

export const getProfileConfig = async (
  summonerName: string,
): Promise<UserEntity> => {
  return await httpRepository.execute({
    path: `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${'RGAPI-c4a4fcc3-1060-4149-a094-a3f259ac3877'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};

export const getRankFromUser = async (
  encryptedSummonerId: string,
): Promise<RankedEntity[]> => {
  return await httpRepository.execute({
    path: `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${'RGAPI-c4a4fcc3-1060-4149-a094-a3f259ac3877'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
