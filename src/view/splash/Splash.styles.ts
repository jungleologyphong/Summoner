import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101114',
    height: hp('100%'),
  },
  img: {
    width: wp(25),
    height: wp(25) * 1.21875,
    marginBottom: hp(2),
    resizeMode: 'contain',
  },
  img_poro: {
    width: wp(35),
    height: wp(35),
    position: 'absolute',
    bottom: hp('2%'),
    marginBottom: hp(2),
    resizeMode: 'contain',
  },
  txt: {
    color: 'black',
    fontSize: wp(4),
  },
});
