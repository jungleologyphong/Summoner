import httpRepository from '~core/http';
import MatchHistoriesEntity from './entity';

interface PayloadGetMatchIdProps {
  startTime: number;
  endTime: number;
  queue: number;
  type: string;
  start: number;
  count: number;
}

export const getArrayMatchId = async (
  params: PayloadGetMatchIdProps,
  puuid: string,
  API_KEY: string,
): Promise<string[]> => {
  return await httpRepository.execute({
    path: `https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${params.startTime}&endTime=${params.endTime}&type=${params.type}&start=0&count=${params.count}&api_key=${API_KEY}`,
    method: 'get',
    showError: true,
    showSuccess: true,
    convert: res => res.data,
  });
};

export const getMatchById = async (
  matchId: string,
  API_KEY: string,
): Promise<MatchHistoriesEntity> => {
  return await httpRepository.execute({
    path:
      'https://sea.api.riotgames.com/lol/match/v5/matches/' +
      `${matchId}` +
      `?api_key=${API_KEY}`,
    method: 'get',
    showError: true,
    showSuccess: true,
    convert: res => res.data.info,
  });
};
