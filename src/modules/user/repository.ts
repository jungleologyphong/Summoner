import UserEntity from './entity';
import httpRepository from '~core/http';
import RankedEntity from '~modules/ranked/entity';

export const getProfileConfig = async (
  summonerName: string,
): Promise<UserEntity> => {
  return await httpRepository.execute({
    path: `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${'RGAPI-e455d155-4a8d-48f0-a24a-0d7feae010de'}`,
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
    path: `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${'RGAPI-e455d155-4a8d-48f0-a24a-0d7feae010de'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
