import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Splash.styles';
import {SplashLogic} from './Splash.logic';
import {getSource} from '~assets';
import {name} from '~config';
import Config from 'react-native-config';
import lodash from 'lodash';
import {navigate} from '~core/helper/navigate';
import FastImage from 'react-native-fast-image';
export const Splash: React.FC<any> = props => {
  const {} = props;
  const {isFocus} = SplashLogic();

  useEffect(() => {
    if (isFocus) {
      lodash.delay(() => {
        navigate('Slider');
      }, 3500);
    }
  }, [isFocus]);

  return (
    <View style={styles.container}>
      <Image source={getSource('LOGO_NAME')} style={styles.img} />
      <FastImage
        source={getSource('ICONS_PORO')}
        style={styles.img_poro}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
