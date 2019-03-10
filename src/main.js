import './main.styl'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')