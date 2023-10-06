import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    backgroundColor: '#101114',
  },
  imgBackground: {
    width: wp('100%'),
    height: hp('115%'),
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  img: {
    width: wp(25),
    height: wp(25) * 1.21875,
    resizeMode: 'contain',
    position: 'absolute',
    top: hp('35%'),
  },
  textTitle: {
    width: wp('85%'),
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: Font.DMSansBold,
    fontSize: wp('5.25%'),
    color: 'white',
    lineHeight: hp('4%'),
  },
  textContent: {
    width: wp('92.5%'),
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: Font.DMSansBold,
    fontSize: wp('3.25%'),
    color: '#B3B0B8',
    marginTop: hp('1%'),
  },
  containerContent: {
    alignItems: 'center',
    top: hp('55%'),
    position: 'absolute',
  },
  btnLoginGoogle: {
    marginTop: hp('5.5%'),
    width: wp('80%'),
    height: hp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp('5%'),
    flexDirection: 'row',
  },
  btnLoginRiot: {
    marginVertical: hp('1.5%'),
    width: wp('80%'),
    height: hp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D23739',
    borderRadius: wp('5%'),
    flexDirection: 'row',
  },
  textLoginRiot: {
    fontFamily: Font.DMSansThinItalic,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: wp('5%'),
    width: wp('60%'),
  },
  textLoginGoogle: {
    fontFamily: Font.DMSansThinItalic,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: wp('5%'),
    width: wp('60%'),
  },
  iconsGoogle: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
  },
  iconsRiot: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
  },
});
