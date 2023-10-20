import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';
import {colorBoard} from '~core';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: wp('1.5%'),
    width: wp('95%'),
    height: hp('12.5%'),
    flexDirection: 'row',
    marginVertical: wp('1%'),
    paddingHorizontal: wp('2.5%'),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  txtRanked: {
    color: colorBoard.gray_0B8,
    fontSize: wp('3.25%'),
    fontWeight: '500',
    fontFamily: Font.DMSansBold,
  },
  txtTypeGame: {
    color: colorBoard.white,
    fontSize: wp('4.25%'),
    fontWeight: 'bold',
    fontFamily: Font.DMSansBold,
  },
  durationGame: {
    color: colorBoard.gray_0B8,
    fontSize: wp('3.25%'),
    fontWeight: '500',
    fontFamily: Font.DMSansBold,
  },
  dateTimeGame: {
    color: colorBoard.gray_0B8,
    fontSize: wp('3.25%'),
    fontWeight: '500',
    fontFamily: Font.DMSansBold,
  },
  coverImage: {
    borderRadius: wp('100%'),
    borderWidth: wp('0.25%'),
    borderColor: colorBoard.white,
    marginHorizontal: wp('0.5%'),
  },
  imgChampion: {
    width: wp('12.5%'),
    height: wp('12.5%'),
    resizeMode: 'contain',
    borderRadius: wp('100%'),
  },
  imgItemChampion: {
    borderRadius: wp('1.5%'),
    margin: wp('0.5%'),
    width: wp('7.5%'),
    height: wp('7.5%'),
    resizeMode: 'contain',
  },
  txtKDA: {
    color: colorBoard.white,
    fontFamily: Font.DMSansBold,
    fontWeight: 'bold',
    fontSize: wp('4.25%'),
    marginHorizontal: wp('1.5%'),
    width: wp('20%'),
    textAlign: 'center',
  },
  txtCS: {
    color: colorBoard.gray_F2F2,
    fontFamily: Font.DMSansBold,
    fontWeight: 'bold',
    fontSize: wp('4.25%'),
    marginHorizontal: wp('1.5%'),
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('0.5%'),
    borderRadius: wp('1.5%'),
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
});
