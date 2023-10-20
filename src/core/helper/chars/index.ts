import lodash from 'lodash';
import {removeAccents} from '~core/helper/string';

const charWidth = {
  A: 6.5,
  B: 6.5,
  C: 6.5,
  G: 6.7,
  M: 9,
  O: 7.8,
  m: 8.1,
  a: 5.8,
  b: 5.8,
  c: 5.8,
  o: 6.5,
  g: 6,
  ' ': 2.4,
};

export const calcCharWidth = (text: string) => {
  if (text === undefined || text.length === 0) {
    return 0;
  }
  const up = 6.5;
  const low = 5.8;
  const textRemoveAccents = removeAccents(text);
  const w = [...textRemoveAccents].reduce((w, c) => {
    const ww = lodash.get(charWidth, c, 0);
    if (ww > 0) {
      return w + ww;
    }
    const code = c.charCodeAt(0);
    if (code < 97 && code > 57) {
      return w + up;
    }
    return w + low;
  }, 0);
  return w + text.length * 0.15;
};
