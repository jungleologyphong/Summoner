import {useEffect, useRef, useState} from 'react';
import store from '~core/store';
import userStore, {UserSelector} from '~modules/user/userStore';
import {useSelector} from 'react-redux';
import {getProfileConfig, getRankFromUser} from '~modules/user/repository';
import {getChampionMastery} from '~modules/championMastery/repository';
import axios from 'axios';
import rankedStore, {RankedSelector} from '~modules/ranked/rankedStore';
import ChampionEntity from '~modules/champion/entity';
import championMasteryStore, {
  ChampionMasterySelector,
} from '~modules/championMastery/champMasteryStore';
export const HomeScreenLogics = () => {
  const [data, setData] = useState<ChampionEntity[]>([]);
  const users = useSelector(UserSelector);
  const rankedOfUser = useSelector(RankedSelector);
  const championMastery = useSelector(ChampionMasterySelector);
  const baseURLImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/`;

  const getLatestChampionDDragon = async () => {
    axios
      .get(
        'https://ddragon.leagueoflegends.com/cdn/13.19.1/data/vi_VN/champion.json',
      )
      .then(res => {
        const arr: ChampionEntity[] = Object.values(res.data.data);

        setData(arr);
      });
  };

  const findChampionById = (data: ChampionEntity[], championId: string) => {
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

  useEffect(() => {
    getProfileConfig('Hide On Bushhhh')
      .then(res => {
        store.dispatch(userStore.actions.setUsers(res));

        const timeOut = setTimeout(() => {
          if (users) {
            getRankFromUser(users.id)
              .then(res => {
                store.dispatch(rankedStore.actions.setRankedOfUsers(res));

                getLatestChampionDDragon();

                getChampionMastery(users.puuid)
                  .then(res => {
                    store.dispatch(
                      championMasteryStore.actions.setChampionMastery(res),
                    );
                  })
                  .catch(error => {
                    console.log(error);
                  });
              })
              .catch(error => {
                console.log(error);
              });
          }
        }, 1500);

        return () => {
          clearTimeout(timeOut);
        };
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return {
    users,
    rankedOfUser,
    data,
    findChampionById,
    championMastery,
    baseURLImage,
  };
};
