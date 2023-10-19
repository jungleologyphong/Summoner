interface ChampionMastery {
  puuid: string;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  tokensEarned: number;
  summonerId: string;
}

class ChampionMasteryEntity {
  puuid = '';
  championId = 0;
  championLevel = 0;
  championPoints = 0;
  lastPlayTime = 0;
  championPointsSinceLastLevel = 0;
  championPointsUntilNextLevel = 0;
  chestGranted = false;
  tokensEarned = 0;
  summonerId = '';

  constructor(championMastery?: Partial<ChampionMastery>) {
    if (!championMastery) {
      return;
    }
    Object.assign(this, championMastery);
  }

  static createArrayChampionMastery(
    arrChampionMastery?: Array<Partial<ChampionMastery>>,
  ): Array<ChampionMastery> {
    if (arrChampionMastery == null || arrChampionMastery.length === 0) {
      return [];
    }
    const list = arrChampionMastery.map(x => new ChampionMasteryEntity(x));
    return list;
  }
}

export default ChampionMasteryEntity;
