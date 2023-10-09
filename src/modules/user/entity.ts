interface UserEntity {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionData: number;
  summonerLevel: number;
}

class UserEntity {
  id = '';
  accountId = '';
  puuid = '';
  name = '';
  profileIconId = 0;
  revisionData = 0;
  summonerLevel = 0;

  constructor(user?: Partial<UserEntity>) {
    if (!user) {
      return;
    }
    Object.assign(this, user);
  }

  static createArrayUser(
    arrUser?: Array<Partial<UserEntity>>,
  ): Array<UserEntity> {
    if (arrUser == null || arrUser.length === 0) {
      return [];
    }
    const list = arrUser.map(x => new UserEntity(x));
    return list;
  }
}

export default UserEntity;
