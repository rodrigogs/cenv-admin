import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
