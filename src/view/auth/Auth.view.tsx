import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {styles} from './Auth.styles';
import {AuthLogic} from './Auth.logic';
import {useAltaIntl} from '~core/helper';
import {getSource} from '~assets';
import {navigate} from '~core/helper/navigate';

export const Auth: React.FC<any> = props => {
  const {} = props;
  const {translate} = useAltaIntl();
  const {} = AuthLogic();
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          alignItems: 'center',
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
        <Image
          source={getSource('BACKGROUND_AUTH')}
          style={styles.imgBackground}
        />
        <View style={styles.containerContent}>
          <Text style={styles.textTitle}>HÃY ĐI CÙNG TÔI</Text>
          <Text style={styles.textContent}>
            Đặt bước chân đầu tiên đúng đắn, chiến thắng sẽ đến với bạn
          </Text>
          <TouchableOpacity
            style={styles.btnLoginGoogle}
            onPress={() => navigate('Auth')}>
            <Image
              source={getSource('ICONS_GOOGLE')}
              style={styles.iconsGoogle}
            />
            <Text style={styles.textLoginGoogle}>
              Đăng nhập với tài khoản Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLoginRiot}
            onPress={() => navigate('Home')}>
            <Image source={getSource('ICONS_RIOT')} style={styles.iconsRiot} />
            <Text style={styles.textLoginRiot}>
              Đăng nhập với tài khoản Riot
            </Text>
          </TouchableOpacity>
        </View>
        <Image source={getSource('LOGO')} style={styles.img} />
      </Animated.View>
    </View>
  );
};
