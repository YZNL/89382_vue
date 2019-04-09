import './main.styl'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import Qs from 'qs'
import VueAxios from 'vue-axios'

// var axios_instance = axios.create({
//   baseURL : 'http://39.108.152.84:8080',
//   transformRequest: [function (data) {
//     // data = Qs.stringify(data);
//     return data;
//   }],
//   headers:{'Content-Type':'FormData'}
// })
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.use(ElementUI)
// Vue.use(VueAxios, axios_instance)

new Vue({
  router,
  VueResource,
  store,
  ElementUI,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
