import userPresenter from '~modules/user/presenter';
import {HomeScreen} from './Home.view';
import {useEffect, useState} from 'react';
import UserEntity from '~modules/user/entity';
import RankedEntity from '~modules/ranked/entity';
import lodash from 'lodash';
import store from '~core/store';
import userStore, {UserSelector} from '~modules/user/userStore';
import {useSelector} from 'react-redux';
import {getProfileConfig} from '~modules/user/repository';
export const HomeScreenLogics = () => {
  const [staProfile, setStaProfile] = useState<UserEntity>({
    id: '',
    accountId: '',
    puuid: '',
    name: '',
    profileIconId: 0,
    revisionData: 0,
    summonerLevel: 0,
  });

  const [staRank, setStaRank] = useState<RankedEntity[]>([
    {
      leagueId: '',
      queueType: '',
      tier: '',
      rank: '',
      summonerId: '',
      summonerName: '',
      leaguePoints: 0,
      wins: 0,
      losses: 0,
      veteran: false,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
  ]);

  const {getProfile, getRankFromUser} = userPresenter;
  const users = useSelector(UserSelector);

  useEffect(() => {
    if (users) {
      getRankFromUser(users.id)
        .then(res => {
          setStaRank(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [users]);

  useEffect(() => {
    getProfileConfig('Hide On Bushhhh')
      .then(res => {
        store.dispatch(userStore.actions.setUsers(res));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return {staRank, users};
};
