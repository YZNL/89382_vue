import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import HomeView from '../views/Home.vue'
import Cre from '../views/cre.vue'
import Sw from '../views/photo.vue'
import Ord from '../views/order.vue'
import Data from '../compents/data.vue'
import dataNo from '../compents/dataNo.vue'
import dataHalf from '../compents/dataHalf.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash', // 默认值  浏览器环境 | “abstract” （node.jd)环境 H5的history模式
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/cre', name: 'cre', component: Cre },
    { path: '/bod', name: 'body', component: Sw },
    {
      path: '/order',
      name: 'order',
      component: Ord,
      children: [
        {
          path: 'data',
          name: 'data',
          component: Data
        },
        {
          path: 'dataNo',
          name: 'dataNo',
          component: dataNo
        },
        {
          path: 'dataHalf',
          name: 'dataHalf',
          component: dataHalf
        }
      ]
    }
    // { path: '/order/data', name: 'data', component: Data }
  ]
})
