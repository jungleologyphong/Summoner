import moment from 'moment';

class UserEntity {
  id = '';
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
