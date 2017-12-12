import axios from 'axios';
import store from '@/store';

export default {
  get({ url, headers = {} }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.NODE_ENV === 'development' ? '/api' : ''}${url}`, { headers })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            resolve(undefined);
          }
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  post({ url, data = {}, headers = {} }) {
    store.commit('setRequestStatus', 'start');
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.NODE_ENV === 'development' ? '/api' : ''}${url}`, data, { headers })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            resolve(undefined);
          }
        })
        .catch(({ response }) => {
          reject(response);
        })
        .then(() => {
          store.commit('setRequestStatus', 'end');
        });
    });
  },
};
