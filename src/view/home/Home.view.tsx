import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {HeaderProfile} from '~components/headerProfile/headerProfile';
import {styles} from './Home.styles';
import {HomeScreenLogics} from './Home.logics';
import {colorBoard, convertStringIndexFirst} from '~core';
import {FullScreenLoadingIndicator} from '~components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';
import {getSource} from '~assets';
import {ItemChampionMastery} from './components/ItemChampionMastery';
import {find} from 'lodash';

export const HomeScreen: React.FC<any> = () => {
  const {
    users,
    rankedOfUser,
    data,
    championMastery,
    findChampionById,
    baseURLImage,
  } = HomeScreenLogics();

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        {users && rankedOfUser && rankedOfUser.length !== 0 ? (
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
        ) : (
          <FullScreenLoadingIndicator visible={true} />
        )}
        <ScrollView>
          <View style={styles.containerTextChampMastery}>
            <Text style={styles.textMastery}>Your Champions</Text>
          </View>
          {championMastery && championMastery.length !== 0 ? (
            <FlatList
              style={{height: hp('37.5%')}}
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
          ) : (
            <FullScreenLoadingIndicator visible={true} />
          )}
          <View style={styles.containerChampRecommend}>
            <Text style={styles.textMastery}>Recommend Champions</Text>
          </View>

          <View style={styles.containerChampRecommend}>
            <Text style={styles.textMastery}>Match History</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
