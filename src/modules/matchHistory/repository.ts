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
): Promise<string[]> => {
  return await httpRepository.execute({
    path: `https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${params.startTime}&endTime=${params.endTime}&type=${params.type}&start=0&count=${params.count}&api_key=RGAPI-e79b9f2d-07d3-48ec-84b7-f0e92e14bfa1`,
    method: 'get',
    showError: true,
    showSuccess: true,
    convert: res => res.data,
  });
};

export const getMatchById = async (
  matchId: string,
): Promise<MatchHistoriesEntity> => {
  return await httpRepository.execute({
    path:
      'https://sea.api.riotgames.com/lol/match/v5/matches/' +
      `${matchId}` +
      '?api_key=RGAPI-e79b9f2d-07d3-48ec-84b7-f0e92e14bfa1',
    method: 'get',
    showError: true,
    showSuccess: true,
    convert: res => res.data.info,
  });
};
