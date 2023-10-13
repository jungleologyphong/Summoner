import {fromPairs} from 'lodash';

const SOURCE = {
  LOGO: require('./icons/icons_logo.png'),
  LOGO_NAME: require('./icons/icons_logo_name.png'),
  BACKGROUND_AUTH: require('./icons/background_auth.png'),
  ICONS_SEARCH: require('./icons/icons_search.png'),
  ICONS_PORO: require('./icons/icons_poro.gif'),
  ICONS_SLIDER: require('./icons/icons_slider.jpg'),
  ICONS_SLIDER2: require('./icons/icons_slider_2.png'),
  ICONS_BUTTON_NEXT: require('./icons/icons_button_next.png'),
  ICONS_RIOT: require('./icons/icons_riot.png'),
  ICONS_GOOGLE: require('./icons/icons_google.png'),
  ICONS_BORDER_DIAMOND: require('./icons/wings_diamond.png'),
  ICONS_DIAMOND: require('./icons/emblem-diamond.png'),
  ICONS_TIER_DIAMOND: require('./icons/diamond-plate.png'),
  ICONS_MASTERY_DEFAULT: require('./icons/mastery_icon_default.png'),
  ICONS_MASTERY_4: require('./icons/mastery_icon_4.png'),
  ICONS_MASTERY_5: require('./icons/mastery_icon_5.png'),
  ICONS_MASTERY_6: require('./icons/mastery_icon_6.png'),
  ICONS_MASTERY_7: require('./icons/mastery_icon_7.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
