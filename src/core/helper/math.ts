import ChampionEntity from '~modules/champion/entity';

export const random = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min));
};

export function randIdCreator() {
  // eslint-disable-next-line
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return `${S4()}${S4()}`;
}

export const getCurrentDate = async () => {
  const currentDay = new Date();
  const timeUnix = Math.floor(currentDay.getTime());
  return await timeUnix;
};

export const getLastSevenDate = async () => {
  const currentDay = new Date();
  currentDay.setDate(currentDay.getDate() - 7);
  const timeUnixLastSevenDay = Math.floor(currentDay.getTime() / 1000);
  return await timeUnixLastSevenDay;
};

export const findChampionById = (
  data: ChampionEntity[],
  championId: string,
) => {
  const champion = data.find(champion => {
    if (champion.key === championId) {
      return champion;
    }
  });

  if (champion) {
    return champion;
  } else {
    return null;
  }
};
