// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { LoadingPlugin } from 'vux';
import FastClick from 'fastclick';
import store from '@/store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
FastClick.attach(document.body);

Vue.use(LoadingPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
