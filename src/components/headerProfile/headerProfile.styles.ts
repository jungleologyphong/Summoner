import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';
import {colorBoard} from '~core';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('95%'),
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('2.5%'),
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('50%'),
  },
  iconsSearch: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: 'contain',
    marginLeft: wp('10%'),
  },
  iconDiamond: {
    zIndex: 2,
    width: wp('25%'),
    height: wp('25%'),
    resizeMode: 'contain',
  },
  coverAvatar: {
    borderColor: colorBoard.borderAvatarSummoner,
    borderWidth: wp('1%'),
    borderRadius: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('16%'),
    width: wp('16%'),
  },
  borderRank: {
    zIndex: 2,
    width: wp('25%'),
    height: wp('25%'),
    resizeMode: 'contain',
  },
  avatarSummoner: {
    zIndex: 1,
    borderRadius: wp('100%'),
    width: wp('15%'),
    height: wp('15%'),
    resizeMode: 'contain',
  },
  summonerName: {
    color: colorBoard.white,
    marginLeft: wp('5.5%'),
    fontSize: wp('4.25%'),
    fontFamily: Font.DMSansThinItalic,
    fontWeight: 'bold',
    marginVertical: wp('0.35%'),
  },
  summonerLevel: {
    color: colorBoard.gray_0B8,
    marginLeft: wp('5.5%'),
    fontSize: wp('3.5%'),
    fontFamily: Font.DMSansThinItalic,
    fontWeight: 'bold',
    marginVertical: wp('0.35%'),
  },
  containerName: {
    flexDirection: 'column',
    marginBottom: wp('1.25%'),
  },
});
