interface ImageProps {
  full: string;
  group: string;
  sprite: string;
  h: string;
  w: number;
  x: number;
  y: string;
}

interface InfoProps {
  attack: number;
  defense: number;
  difficulty: number;
  magic: number;
}

interface StatsProps {
  armor: number;
  armorperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackrange: number;
  attackspeed: number;
  attackspeedperlevel: number;
  crit: number;
  critperlevel: number;
  hp: number;
  hpperlevel: number;
  hpregen: number;
  hpregenperlevel: number;
  movespeed: number;
  mp: number;
  mpperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
}

interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  partype: string;
  title: string;
  blurb: string;
  image: ImageProps;
  info: InfoProps;
  stats: StatsProps;
  tags: [];
}

class ChampionEntity {
  version = '';
  id = '';
  key = '';
  name = '';
  title = '';
  blurb = '';
  image = {
    full: '',
    group: '',
    sprite: '',
    h: '',
    w: 0,
    x: '',
    y: '',
  };
  info = {
    attack: 0,
    defense: 4,
    difficulty: 4,
    magic: 3,
  };
  partype = '';
  stats = {
    armor: 0,
    armorperlevel: 0,
    attackdamage: 0,
    attackdamageperlevel: 0,
    attackrange: 0,
    attackspeed: 0,
    attackspeedperlevel: 0,
    crit: 0,
    critperlevel: 0,
    hp: 0,
    hpperlevel: 0,
    hpregen: 0,
    hpregenperlevel: 0,
    movespeed: 0,
    mp: 0,
    mpperlevel: 0,
    mpregen: 0,
    mpregenperlevel: 0,
    spellblock: 0,
    spellblockperlevel: 0,
  };
  tags = [];

  constructor(champion: Partial<ChampionEntity>) {
    if (!champion) {
      return;
    }
    Object.assign(this, champion);
  }

  static createArrayChampion(arrChampion: Array<Partial<ChampionEntity>>) {
    if (arrChampion == null || arrChampion.length === 0) {
      return [];
    }
    return arrChampion.map((champion: Partial<ChampionEntity>) => {
      return new ChampionEntity(champion);
    });
  }
}

export default ChampionEntity;
