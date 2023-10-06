import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {styles} from './slider.styles';
import {SliderLogic} from './slider.logic';
import {Font} from '~assets/fonts';
import {getSource} from '~assets';
import {useIsFocused} from '@react-navigation/native';
import {navigate} from '~core/helper/navigate';
export const Slider: React.FC<any> = props => {
  const {} = props;
  const {} = SliderLogic();
  const [staChangeBackground, setStaChangeBackground] = useState(false);
  const isFocus = useIsFocused();
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (isFocus) {
      const interval = setInterval(() => {
        setStaChangeBackground(!staChangeBackground);
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isFocus, staChangeBackground]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        }}>
        <ImageBackground
          source={
            staChangeBackground
              ? getSource('ICONS_SLIDER')
              : getSource('ICONS_SLIDER2')
          }
          style={styles.imgBackground}>
          <View style={styles.containerContent}>
            <Text style={styles.textTitle}>
              LIÊN MINH HUYỀN THOẠI{'\n'}MỘT CÁCH CHUYÊN NGHIỆP HƠN!
            </Text>
            <Text style={styles.textContent}>
              Với số liệu được phân tích và thống kê...
            </Text>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => navigate('Auth')}>
              <Image source={getSource('ICONS_BUTTON_NEXT')} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};
