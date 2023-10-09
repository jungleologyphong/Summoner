interface RankedEntity {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

class RankedEntity {
  leagueId = '';
  queueType = '';
  tier = '';
  rank = '';
  summonerId = '';
  summonerName = '';
  leaguePoints = 0;
  wins = 0;
  losses = 0;
  veteran = false;
  inactive = false;
  freshBlood = false;
  hotStreak = false;

  constructor(ranked?: Partial<RankedEntity>) {
    if (!ranked) {
      return;
    }
    Object.assign(this, ranked);
  }

  static createArrayUser(
    arrRanked?: Array<Partial<RankedEntity>>,
  ): Array<RankedEntity> {
    if (arrRanked == null || arrRanked.length === 0) {
      return [];
    }
    const list = arrRanked.map(x => new RankedEntity(x));
    return list;
  }
}

export default RankedEntity;
