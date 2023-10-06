import {fromPairs} from 'lodash';

const SOURCE = {
  LOGO: require('./icons/icons_logo.png'),
  LOGO_NAME: require('./icons/icons_logo_name.png'),
  BACKGROUND_AUTH: require('./icons/background_auth.png'),
  ICONS_PORO: require('./icons/icons_poro.gif'),
  ICONS_SLIDER: require('./icons/icons_slider.jpg'),
  ICONS_SLIDER2: require('./icons/icons_slider_2.png'),
  ICONS_BUTTON_NEXT: require('./icons/icons_button_next.png'),
  ICONS_RIOT: require('./icons/icons_riot.png'),
  ICONS_GOOGLE: require('./icons/icons_google.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
