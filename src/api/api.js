import http from './httpClient';

export default {
  getList() {
    return http.post({ url: '/top/playlist/highquality' });
  },
};
