// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.min.css'

// axios.defaults.headers.post["Content-type"]="application/json";
// Vue.prototype.$axios=axios;


import 'lib-flexible'
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
