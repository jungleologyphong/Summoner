import httpRepository from '~core/http';

interface PayloadGetMatchIdProps {
  startTime: number;
  endTime: number;
  queue: number;
  type: string;
  start: number;
  count: number;
}

export const getArrayMatchId = async (
  payload: PayloadGetMatchIdProps,
  puuid: string,
) => {
  return await httpRepository.execute({
    path: `https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}`,
    payload: payload,
    method: 'get',
  });
};
