import httpRepository from '~core/http';

export const getChampionMastery = async (encryptedSummonerId: string) => {
  return await httpRepository.execute({
    path: `https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedSummonerId}?api_key=${'RGAPI-e6201c03-3853-4094-9c6e-f46e8d0ad62f'}`,
    method: 'get',
    showSuccess: true,
    showError: false,
    convert: res => res.data,
  });
};
