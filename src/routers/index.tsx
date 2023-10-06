import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {CodePushSelector} from '~modules/setting/settingStore';
import {Splash, Auth} from '~view';
import {navigationRef} from '~core/helper/navigate';
import {Slider} from '~view/slider/slider.view';
const Stack = createNativeStackNavigator();

const privateScreen: any[] = [Auth];

const MainRouter = () => {
  const {splash} = useSelector(CodePushSelector);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default React.memo(MainRouter);
