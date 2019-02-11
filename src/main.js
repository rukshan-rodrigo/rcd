// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
//   store,
// }).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import {
  store
} from './store/store';

Vue.config.productionTip = false
Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})