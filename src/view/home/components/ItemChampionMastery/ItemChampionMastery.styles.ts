import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';
import {colorBoard} from '~core';

export const styles = StyleSheet.create({
  containerItemChampMastery: {
    width: wp('35%'),
    height: wp('38%'),
    borderWidth: wp('0.5%'),
    borderRadius: wp('2.5%'),
  },
  imageChamp: {
    width: wp('35%'),
    height: wp('50%'),
    resizeMode: 'stretch',
  },
  textNameChamp: {
    width: wp('25%'),
    color: colorBoard.white,
    fontSize: wp('3.75%'),
    fontFamily: Font.DMSansBold,
    fontWeight: 'bold',
    marginLeft: wp('1.25%'),
  },
  textRole: {
    color: colorBoard.gray_0B8,
    fontStyle: 'italic',
    marginLeft: wp('1.25%'),
  },
  imageMastery: {
    resizeMode: 'contain',
    width: wp('8.5%'),
    height: hp('8.5%'),
    marginRight: wp('2.5%'),
  },
  containerMastery: {
    flexDirection: 'row',
    width: wp('35%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
