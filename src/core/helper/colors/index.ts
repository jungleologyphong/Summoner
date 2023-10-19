export const rgb2hex = (rgb: string) => {
  const rgbArray = rgb.split(',');
  return rgbArray.reduce((hex: string, c: string) => {
    let hexColor = parseInt(c).toString(16);
    if (hexColor.length === 1) {
      hexColor = `0${hexColor}`;
    }
    return hex + hexColor;
  }, '#');
};

export const hex2rgb = (hex: string) => {
  let mainHex = hex;
  if (hex.startsWith('#')) {
    mainHex = hex.replace('#', '');
  }
  let rgb = '';
  for (let i = 0; i < mainHex.length; i += 2) {
    const rgbColor = parseInt(mainHex.substring(i, i + 2));
    if (i + 2 < mainHex.length) {
      rgb += `${rgbColor},`;
    } else {
      rgb += `${rgbColor}`;
    }
  }
  return rgb;
};

export const colorBoard = {
  white: '#FFFFFF',
  black: '#000000',
  gray_0B8: '#B3B0B8',
  gray_F1F1: '#F1F1F1',
  gray_F2F2: '#F2F2F2',
  backgroundColorApp: '#101114',
  borderAvatarSummoner: '#AD4CFE',
};
