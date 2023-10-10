import {useEffect, useRef, useState} from 'react';
import store from '~core/store';
import userStore, {UserSelector} from '~modules/user/userStore';
import {useSelector} from 'react-redux';
import {getProfileConfig, getRankFromUser} from '~modules/user/repository';
import {getChampionMastery} from '~modules/championMastery/repository';
import axios from 'axios';
import rankedStore, {RankedSelector} from '~modules/ranked/rankedStore';
export const HomeScreenLogics = () => {
  const users = useSelector(UserSelector);
  const rankedOfUser = useSelector(RankedSelector);
  const [data, setData] = useState<[]>([]);
  const getLatestChampionDDragon = async () => {
    axios
      .get(
        'https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json',
      )
      .then(res => {
        setData(res.data.data);

        const arr = Object.values(res.data.data);

        setData(arr);
      });
  };

  useEffect(() => {
    if (users) {
      getRankFromUser(users.id)
        .then(res => {
          store.dispatch(rankedStore.actions.setRankedOfUsers(res));
          getLatestChampionDDragon();
          getChampionMastery(users.puuid)
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log(error);
            });
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

  return {users, rankedOfUser, data};
};
