/* eslint-disable indent */
import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {HeaderProfile} from '~components/headerProfile/headerProfile';
import {styles} from './Home.styles';
import {HomeScreenLogics} from './Home.logics';
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
    getAsyncProfileConfig,
    getAsyncRankFromUser,
    getAsyncChampionMastery,
  } = HomeScreenLogics();

  return (
    <View style={styles.container}>
      <ScrollView>
        {getAsyncProfileConfig?.status === 'loading' ||
        getAsyncRankFromUser?.status === 'loading' ||
        getAsyncChampionMastery?.status === 'loading' ? (
          <FullScreenLoadingIndicator
            visible={
              getAsyncProfileConfig?.status === 'loading' ||
              getAsyncRankFromUser?.status === 'loading'
            }
          />
        ) : (
          <View style={styles.containerContent}>
            <HeaderProfile
              avatarSummoner={users.profileIconId.toString()}
              summonerName={users.name}
              summonerLevel={users.summonerLevel}
              summonerRank={
                rankedOfUser ? rankedOfUser.tier + ' ' + rankedOfUser.rank : ''
              }
              summerTier={rankedOfUser ? rankedOfUser.tier : ''}
            />
            <View style={styles.containerTextChampMastery}>
              <Text style={styles.textMastery}>Your Champions</Text>
            </View>
            <FlatList
              style={styles.flatlistChampionMastery}
              horizontal={true}
              nestedScrollEnabled={true}
              keyExtractor={item => item.championId + ''}
              data={championMastery.slice(0, 10)}
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
            <View style={styles.containerChampRecommend}>
              <Text style={styles.textMastery}>Recommend Champions</Text>
            </View>
            <View style={styles.containerChampRecommend}>
              <Text style={styles.textMastery}>Match History</Text>
            </View>
            <FlatList
              style={styles.flatlistMatchHistory}
              nestedScrollEnabled
              keyExtractor={item => item.gameId + ''}
              data={matchHistory}
              renderItem={({item, index}) => <ItemMatchHistory item={item} />}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
