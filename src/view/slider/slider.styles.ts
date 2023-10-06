import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101114',
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
    width: wp('85%'),
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: Font.DMSansBold,
    fontSize: wp('3.25%'),
    color: '#B3B0B8',
    marginTop: hp('1%'),
  },
  containerContent: {
    alignItems: 'center',
    bottom: hp('5%'),
    position: 'absolute',
  },
  imgBackground: {
    flex: 1,
    width: wp('100%'),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    marginVertical: hp('2.5%'),
  },
});
