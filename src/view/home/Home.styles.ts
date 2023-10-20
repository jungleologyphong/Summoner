import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';
import {colorBoard} from '~core';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    backgroundColor: colorBoard.backgroundColorApp,
  },
  containerContent: {
    alignItems: 'center',
    width: wp('95%'),
  },
  textMastery: {
    color: colorBoard.white,
    fontSize: wp('4.25%'),
    fontFamily: Font.DMSansBold,
    fontWeight: 'bold',
    marginVertical: wp('2.5%'),
  },
  textMore: {
    color: colorBoard.gray_0B8,
    fontSize: wp('4.25%'),
    fontFamily: Font.DMSansBold,
    fontWeight: 'bold',
    marginVertical: wp('2.5%'),
  },
  containerTextChampMastery: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp('95%'),
  },
  containerChampRecommend: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp('95%'),
  },
  flatlistChampionMastery: {
    height: hp('33.5%'),
  },
  flatlistMatchHistory: {
    height: hp('60%%'),
    marginVertical: wp('2.5%'),
  },
});
