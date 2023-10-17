import {MatchHistoriesSelector} from './../../modules/matchHistory/matchHistoriesStore';
/* eslint-disable no-console */
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
import {getArrayMatchId, getMatchById} from '~modules/matchHistory/repository';

import MatchHistoriesEntity from '~modules/matchHistory/entity';
import matchHistoriesStore from '~modules/matchHistory/matchHistoriesStore';
export const HomeScreenLogics = () => {
  const [data, setData] = useState<ChampionEntity[]>([]);
  const dataMatchHistory = useRef<MatchHistoriesEntity[]>([]);
  const users = useSelector(UserSelector);
  const rankedOfUser = useSelector(RankedSelector);
  const championMastery = useSelector(ChampionMasterySelector);
  const matchHistory = useSelector(MatchHistoriesSelector);
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

  const fnc_getRankAndChampionMastery = async (id: string) => {
    getRankFromUser(id)
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
  };

  const fnc_getArrayMatchId = async (puuid: string) => {
    getArrayMatchId(
      {
        startTime: 1697389200,
        endTime: 1697475600,
        queue: 0,
        type: 'ranked',
        start: 0,
        count: 20,
      },
      puuid,
    )
      .then(res => {
        for (let index = 0; index < res.length; index++) {
          const element = res[index];

          getMatchById(element)
            .then(res => {
              const newObject: MatchHistoriesEntity = res;

              dataMatchHistory.current = [
                ...dataMatchHistory.current,
                newObject,
              ];

              store.dispatch(
                matchHistoriesStore.actions.setMatchHistory(
                  dataMatchHistory.current,
                ),
              );
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfileConfig('Hide On Bushhhh')
      .then(res => {
        store.dispatch(userStore.actions.setUsers(res));

        const timeOut = setTimeout(() => {
          if (users) {
            fnc_getArrayMatchId(users.puuid);

            fnc_getRankAndChampionMastery(users.id);
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
    matchHistory,
  };
};
