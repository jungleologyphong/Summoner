/* eslint-disable indent */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './ItemMatchHistory.styles';
import {Image, Text, View} from 'react-native';
import MatchHistoriesEntity from '~modules/matchHistory/entity';
import {colorBoard} from '~core';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';
import moment from 'moment';
import {getSource} from '~assets';

interface ItemMatchHistoryProps {
  item: MatchHistoriesEntity;
}

export const ItemMatchHistory: React.FC<ItemMatchHistoryProps> = props => {
  const {item} = props;
  const baseURLImage = `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion`;
  const baseURLItem = `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/item/`;

  const convertMinutesAndSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return {minutes, remainingSeconds};
  };

  const convertUnixToDateTime = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {year, month, day, hours, minutes, seconds};
  };

  const assists = item.participants.find(
    item => item.summonerName === 'Hide On Bushhhh',
  )?.assists;

  const kills = item.participants.find(
    item => item.summonerName === 'Hide On Bushhhh',
  )?.kills;

  const deaths = item.participants.find(
    item => item.summonerName === 'Hide On Bushhhh',
  )?.deaths;

  const calculatorKDA = (Number(kills) + Number(assists)) / Number(deaths);

  return (
    <LinearGradient
      start={{x: 0, y: 2}}
      end={{x: 1, y: 3}}
      colors={
        item.participants.find(item => item.summonerName === 'Hide On Bushhhh')
          ?.win
          ? ['#3F52AA', '#4C4EA3', '#50358E']
          : ['#84514B', '#80484C', '#5F273F']
      }
      style={styles.linearGradient}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.txtTypeGame}>
          {item.participants.find(
            item => item.summonerName === 'Hide On Bushhhh',
          )?.win
            ? 'VICTORY'
            : 'LOSE'}
        </Text>
        <Text style={styles.txtRanked}>RANKED</Text>
        <Text style={styles.durationGame}>
          {convertMinutesAndSeconds(item.gameDuration).minutes +
            ':' +
            convertMinutesAndSeconds(item.gameDuration).remainingSeconds}
        </Text>
        <Text style={styles.dateTimeGame}>
          {convertUnixToDateTime(item.gameCreation).day +
            '/' +
            convertUnixToDateTime(item.gameCreation).month +
            '/' +
            convertUnixToDateTime(item.gameCreation).year}
        </Text>
      </View>
      <View style={styles.coverImage}>
        <Image
          style={styles.imgChampion}
          source={{
            uri: `${baseURLImage}/${
              item.participants.find(
                item => item.summonerName === 'Hide On Bushhhh',
              )?.championName
            }.png`,
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginHorizontal: wp('0.5%')}}>
        <Text style={styles.txtKDA}>
          {
            item.participants.find(
              item => item.summonerName === 'Hide On Bushhhh',
            )?.kills
          }
          {'/'}
          {
            item.participants.find(
              item => item.summonerName === 'Hide On Bushhhh',
            )?.deaths
          }
          {'/'}
          {
            item.participants.find(
              item => item.summonerName === 'Hide On Bushhhh',
            )?.assists
          }
        </Text>
        <Text style={styles.txtCS}>
          {calculatorKDA.toFixed(2) + ' ' + 'KDA'}
        </Text>
        <Text style={styles.txtCS}>
          {item.participants.find(
            item => item.summonerName === 'Hide On Bushhhh',
          )?.totalMinionsKilled +
            ' ' +
            'CS'}
        </Text>
      </View>
      <View style={styles.containerItem}>
        <View>
          <View style={styles.row}>
            <Image
              style={styles.imgItemChampion}
              source={
                item.participants.find(
                  item => item.summonerName === 'Hide On Bushhhh',
                )?.item0 === 0
                  ? getSource('ICONS_PLACEHOLDER')
                  : {
                      uri: `${baseURLItem}${
                        item.participants.find(
                          item => item.summonerName === 'Hide On Bushhhh',
                        )?.item0
                      }.png`,
                    }
              }
            />
            <Image
              style={styles.imgItemChampion}
              source={
                item.participants.find(
                  item => item.summonerName === 'Hide On Bushhhh',
                )?.item1 === 0
                  ? getSource('ICONS_PLACEHOLDER')
                  : {
                      uri: `${baseURLItem}${
                        item.participants.find(
                          item => item.summonerName === 'Hide On Bushhhh',
                        )?.item1
                      }.png`,
                    }
              }
            />
            <Image
              style={styles.imgItemChampion}
              source={
                item.participants.find(
                  item => item.summonerName === 'Hide On Bushhhh',
                )?.item2 === 0
                  ? getSource('ICONS_PLACEHOLDER')
                  : {
                      uri: `${baseURLItem}${
                        item.participants.find(
                          item => item.summonerName === 'Hide On Bushhhh',
                        )?.item2
                      }.png`,
                    }
              }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.imgItemChampion}
              source={
                item.participants.find(
                  item => item.summonerName === 'Hide On Bushhhh',
                )?.item3 === 0
                  ? getSource('ICONS_PLACEHOLDER')
                  : {
                      uri: `${baseURLItem}${
                        item.participants.find(
                          item => item.summonerName === 'Hide On Bushhhh',
                        )?.item3
                      }.png`,
                    }
              }
            />
            <Image
              style={styles.imgItemChampion}
              source={
                item.participants.find(
                  item => item.summonerName === 'Hide On Bushhhh',
                )?.item4 === 0
                  ? getSource('ICONS_PLACEHOLDER')
                  : {
                      uri: `${baseURLItem}${
                        item.participants.find(
                          item => item.summonerName === 'Hide On Bushhhh',
                        )?.item4
                      }.png`,
                    }
              }
            />
            <Image
              style={styles.imgItemChampion}
              source={
                item.participants.find(
                  item => item.summonerName === 'Hide On Bushhhh',
                )?.item5 === 0
                  ? getSource('ICONS_PLACEHOLDER')
                  : {
                      uri: `${baseURLItem}${
                        item.participants.find(
                          item => item.summonerName === 'Hide On Bushhhh',
                        )?.item5
                      }.png`,
                    }
              }
            />
          </View>
        </View>
        <Image
          style={styles.imgItemChampion}
          source={
            item.participants.find(
              item => item.summonerName === 'Hide On Bushhhh',
            )?.item6 === 0
              ? getSource('ICONS_PLACEHOLDER')
              : {
                  uri: `${baseURLItem}${
                    item.participants.find(
                      item => item.summonerName === 'Hide On Bushhhh',
                    )?.item6
                  }.png`,
                }
          }
        />
      </View>
    </LinearGradient>
  );
};
