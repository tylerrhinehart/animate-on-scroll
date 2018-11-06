import Vue from 'vue'
import App from './App.vue'

import VueScrollMagic from 'ks-vue-scrollmagic';

Vue.config.productionTip = false

Vue.use(VueScrollMagic);

new Vue({
  render: h => h(App),
}).$mount('#app')
