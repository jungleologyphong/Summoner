import React from 'react';
import {View} from 'react-native';
import {HeaderProfile} from '~components/headerProfile/headerProfile';
import {styles} from './Home.styles';
import {HomeScreenLogics} from './Home.logics';
import {convertStringIndexFirst} from '~core';

export const HomeScreen: React.FC<any> = () => {
  const {users, rankedOfUser} = HomeScreenLogics();

  return (
    <View style={styles.container}>
      <HeaderProfile
        avatarSummoner={users?.profileIconId.toString()}
        summonerName={users?.name}
        summonerRank={
          convertStringIndexFirst(rankedOfUser[0]?.tier) +
          ' ' +
          rankedOfUser[0]?.rank.toUpperCase()
        }
        summonerLevel={users?.summonerLevel}
        summerTier={rankedOfUser[0]?.tier}
      />
    </View>
  );
};
