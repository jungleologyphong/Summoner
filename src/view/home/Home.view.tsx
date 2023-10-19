/* eslint-disable indent */
import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {HeaderProfile} from '~components/headerProfile/headerProfile';
import {styles} from './Home.styles';
import {HomeScreenLogics} from './Home.logics';
import {convertStringIndexFirst} from '~core';
import {FullScreenLoadingIndicator} from '~components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ItemChampionMastery, ItemMatchHistory} from './components';

export const HomeScreen: React.FC<any> = () => {
  const {
    users,
    rankedOfUser,
    data,
    championMastery,
    findChampionById,
    baseURLImage,
    matchHistory,
  } = HomeScreenLogics();

  console.log(users, rankedOfUser);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerContent}>
          {users && rankedOfUser && rankedOfUser.length === 0 ? (
            <FullScreenLoadingIndicator visible={true} />
          ) : (
            <HeaderProfile
              avatarSummoner={users.profileIconId.toString()}
              summonerName={users.name}
              summonerRank={
                convertStringIndexFirst(rankedOfUser[0].tier) +
                ' ' +
                rankedOfUser[0].rank.toUpperCase()
              }
              summonerLevel={users?.summonerLevel}
              summerTier={rankedOfUser[0].tier}
            />
          )}
          <View style={styles.containerTextChampMastery}>
            <Text style={styles.textMastery}>Your Champions</Text>
          </View>
          {championMastery && championMastery.length === 0 ? (
            <FullScreenLoadingIndicator visible={true} />
          ) : (
            <FlatList
              style={{height: hp('33.5%')}}
              horizontal={true}
              nestedScrollEnabled={true}
              keyExtractor={item => item.championId + ''}
              data={championMastery ? championMastery.slice(0, 10) : []}
              renderItem={({item, index}) => (
                <ItemChampionMastery
                  imageChampion={{
                    uri: `${baseURLImage}${
                      findChampionById(data, item.championId.toString())?.id +
                      '_0'
                    }.jpg`,
                  }}
                  championLevel={item.championLevel}
                  championId={item.championId.toString()}
                  indexItem={index}
                  data={data}
                />
              )}
            />
          )}
          <View style={styles.containerChampRecommend}>
            <Text style={styles.textMastery}>Recommend Champions</Text>
          </View>

          <View style={styles.containerChampRecommend}>
            <Text style={styles.textMastery}>Match History</Text>
          </View>
          {matchHistory && matchHistory.length === 0 ? (
            <FullScreenLoadingIndicator visible={true} />
          ) : (
            <FlatList
              style={{height: hp('60%%'), marginVertical: wp('2.5%')}}
              nestedScrollEnabled
              keyExtractor={item => item.gameId + ''}
              data={matchHistory}
              renderItem={({item, index}) => <ItemMatchHistory item={item} />}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
