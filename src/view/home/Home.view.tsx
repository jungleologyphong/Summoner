import React from 'react';
import {View} from 'react-native';
import {HeaderProfile} from '~components/headerProfile/headerProfile';
import {styles} from './Home.styles';
import {HomeScreenLogics} from './Home.logics';
import {convertStringIndexFirst} from '~core';

export const HomeScreen: React.FC<any> = () => {
  const {users, staRank} = HomeScreenLogics();

  console.log(staRank);

  return (
    <View style={styles.container}>
      <HeaderProfile
        avatarSummoner={users.profileIconId.toString()}
        summonerName={users?.name}
        summonerRank={
          convertStringIndexFirst(staRank[0].tier) +
          ' ' +
          staRank[0].rank.toUpperCase()
        }
        summonerLevel={users.summonerLevel}
        summerTier={staRank[0].tier}
      />
    </View>
  );
};
