export const random = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min));
};

export function randIdCreator() {
  // eslint-disable-next-line
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return `${S4()}${S4()}`;
}
