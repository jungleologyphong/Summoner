/* eslint-disable no-console */
import {MatchHistoriesSelector} from './../../modules/matchHistory/matchHistoriesStore';
import {useEffect, useRef, useState} from 'react';
import store from '~core/store';
import {UserSelector} from '~modules/user/userStore';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {RankedSelector} from '~modules/ranked/rankedStore';
import ChampionEntity from '~modules/champion/entity';
import {ChampionMasterySelector} from '~modules/championMastery/champMasteryStore';
import {getArrayMatchId, getMatchById} from '~modules/matchHistory/repository';
import MatchHistoriesEntity from '~modules/matchHistory/entity';
import matchHistoriesStore from '~modules/matchHistory/matchHistoriesStore';
import userPresenter from '~modules/user/presenter';
import {
  findChampionById,
  getCurrentDate,
  getLastSevenDate,
  useSingleAsync,
} from '~core';
import championMasteryPresenter from '~modules/championMastery/presenter';

export const HomeScreenLogics = () => {
  const [data, setData] = useState<ChampionEntity[]>([]);
  const dataMatchHistory = useRef<MatchHistoriesEntity[]>([]);
  const users = useSelector(UserSelector);
  const rankedOfUser = useSelector(RankedSelector);
  const championMastery = useSelector(ChampionMasterySelector);
  const matchHistory = useSelector(MatchHistoriesSelector);
  const API_KEY = 'RGAPI-fb946d7f-ce31-4ad9-ae1d-2d369d561820';
  const baseURLImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/`;
  const {getProfileConfig, getRankFromUser} = userPresenter;
  const {getChampionMastery} = championMasteryPresenter;
  const getAsyncProfileConfig = useSingleAsync(getProfileConfig);
  const getAsyncRankFromUser = useSingleAsync(getRankFromUser);
  const getAsyncChampionMastery = useSingleAsync(getChampionMastery);

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

  const getMatchId = async (puuid: string) => {
    getArrayMatchId(
      {
        startTime: await getLastSevenDate(),
        endTime: await getCurrentDate(),
        queue: 0,
        type: 'ranked',
        start: 0,
        count: 20,
      },
      puuid,
      API_KEY,
    )
      .then(res => {
        for (let index = 0; index < res.length; index++) {
          const element = res[index];

          getMatchById(element, API_KEY)
            .then(res => {
              const newObject: MatchHistoriesEntity = res;

              dataMatchHistory.current = [
                ...dataMatchHistory.current,
                newObject,
              ];

              store.dispatch(
                matchHistoriesStore.actions.setMatchHistory(
                  dataMatchHistory.current.sort(
                    (itemA, itemB) => itemB.gameCreation - itemA.gameCreation,
                  ),
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
    getAsyncProfileConfig
      ?.execute('Hide On Bushhhh', API_KEY)
      ?.then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getLatestChampionDDragon();
  }, []);

  useEffect(() => {
    getMatchId(users.puuid);
  }, []);

  useEffect(() => {
    getAsyncRankFromUser?.execute(users.id)?.then(() => {
      getAsyncChampionMastery
        ?.execute(users.puuid, API_KEY)
        ?.then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, [users]);

  return {
    users,
    rankedOfUser,
    data,
    findChampionById,
    championMastery,
    baseURLImage,
    matchHistory,
    getAsyncProfileConfig,
    getAsyncRankFromUser,
    getAsyncChampionMastery,
  };
};
