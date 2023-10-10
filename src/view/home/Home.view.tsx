import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {HeaderProfile} from '~components/headerProfile/headerProfile';
import {styles} from './Home.styles';
import {HomeScreenLogics} from './Home.logics';
import {convertStringIndexFirst} from '~core';

export const HomeScreen: React.FC<any> = () => {
  const {users, rankedOfUser, data} = HomeScreenLogics();

  console.log(data);

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
      <FlatList
        keyExtractor={item => item.id + ''}
        style={{flex: 1, height: '100%', width: '100%'}}
        data={data}
        renderItem={({item}) => (
          <Text style={{color: '#FFFFFF'}}>{item.name}</Text>
        )}
      />
    </View>
  );
};
