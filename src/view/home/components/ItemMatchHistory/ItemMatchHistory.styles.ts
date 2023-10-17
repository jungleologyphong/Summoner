import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
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
});
