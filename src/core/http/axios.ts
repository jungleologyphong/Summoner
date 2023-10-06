import axios from 'axios';

export const get = (url: string, options?: any) => {
  return axios.get(url).then(rs => {
    return Promise.resolve(rs.data);
  });
};
