import React, {Component} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  containerStyle: ViewStyle;
  style?: TextStyle;
  style1?: TextStyle;
}
export const toastConfig = {
  default: ({text1, props}: any) => (
    <View
      style={[
        {
          backgroundColor: 'white',
          justifyContent: 'center',
          width: wp(95),
          borderRadius: wp(2),
        },
        props.containerStyle,
      ]}>
      <Text style={[{textAlign: 'center'}]}>{text1}</Text>
    </View>
  ),
  success: ({text1, props}: any) => (
    <View
      style={[
        {
          backgroundColor: '#D5F5D2',
          justifyContent: 'center',
          width: wp(95),
          borderRadius: wp(2),
          height: heightPercentageToDP(5),
        },
        props.containerStyle,
      ]}>
      <Text style={[{textAlign: 'center', color: '#34CD26'}, props.style]}>
        {text1}
      </Text>
    </View>
  ),
  error: ({text1, props}: any) => (
    <View
      style={[
        {
          backgroundColor: 'pink',
          justifyContent: 'center',
          width: wp(95),
          borderRadius: wp(2),
          height: heightPercentageToDP(5),
        },
        props.containerStyle,
      ]}>
      <Text style={[{textAlign: 'center', color: 'red'}]}>{text1}</Text>
    </View>
  ),
};
