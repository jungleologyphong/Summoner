import axios from 'axios';
import UserEntity from './entity';
import httpRepository from '~core/http';
import {env_set} from '~config';
import store from '~core/store';
import userStore from './userStore';

const baseURL = 'https://vn2.api.riotgames.com';

export const getProfileConfig = async (
  summonerName: string,
): Promise<UserEntity> => {
  return await httpRepository.execute({
    path: `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-8f7d4ffc-e1f0-4a23-8686-fa8f8304c2eb`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};

export const getProfile = async (summonerName: string) => {
  return await axios.get(
    `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-8f7d4ffc-e1f0-4a23-8686-fa8f8304c2eb`,

    {baseURL: baseURL},
  );
};

export const getRankFromUser = async (encryptedSummonerId: string) => {
  return await axios.get(
    `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=RGAPI-8f7d4ffc-e1f0-4a23-8686-fa8f8304c2eb`,

    {baseURL: baseURL},
  );
};
