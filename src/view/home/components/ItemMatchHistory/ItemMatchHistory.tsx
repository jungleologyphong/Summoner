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

interface ItemMatchHistoryProps {
  item: MatchHistoriesEntity;
}

export const ItemMatchHistory: React.FC<ItemMatchHistoryProps> = props => {
  const {item} = props;
  const baseURLImage = `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion`;

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

  console.log(
    `${baseURLImage}/${
      item.participants.find(item => item.summonerName === 'Hide On Bushhhh')
        ?.championName
    }.png`,
  );

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
        <Text
          style={{
            color: colorBoard.white,
            fontSize: wp('4.25%'),
            fontWeight: 'bold',
            fontFamily: Font.DMSansBold,
          }}>
          {item.participants.find(
            item => item.summonerName === 'Hide On Bushhhh',
          )?.win
            ? 'VICTORY'
            : 'LOSE'}
        </Text>
        <Text
          style={{
            color: colorBoard.gray_0B8,
            fontSize: wp('3.25%'),
            fontWeight: '500',
            fontFamily: Font.DMSansBold,
          }}>
          RANKED
        </Text>
        <Text
          style={{
            color: colorBoard.gray_0B8,
            fontSize: wp('3.25%'),
            fontWeight: '500',
            fontFamily: Font.DMSansBold,
          }}>
          {convertMinutesAndSeconds(item.gameDuration).minutes +
            ':' +
            convertMinutesAndSeconds(item.gameDuration).remainingSeconds}
        </Text>
        <Text
          style={{
            color: colorBoard.gray_0B8,
            fontSize: wp('3.25%'),
            fontWeight: '500',
            fontFamily: Font.DMSansBold,
          }}>
          {convertUnixToDateTime(item.gameCreation).day +
            '/' +
            convertUnixToDateTime(item.gameCreation).month +
            '/' +
            convertUnixToDateTime(item.gameCreation).year}
        </Text>
      </View>
      <View
        style={{
          borderRadius: wp('100%'),
          borderWidth: wp('0.25%'),
          borderColor: colorBoard.white,
          marginHorizontal: wp('2.5%'),
        }}>
        <Image
          style={{
            width: wp('12.5%'),
            height: wp('12.5%'),
            resizeMode: 'contain',
            borderRadius: wp('100%'),
          }}
          source={{
            uri: `${baseURLImage}/${
              item.participants.find(
                item => item.summonerName === 'Hide On Bushhhh',
              )?.championName
            }.png`,
          }}
        />
      </View>
    </LinearGradient>
  );
};
