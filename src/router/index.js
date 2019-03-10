import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import HomeView from '../views/Home.vue'
import Cre from '../views/cre.vue'
import Sw from '../views/body.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/cre', name: 'cre', component: Cre },
    { path: '/bod', name: 'body', component: Sw }
  ]
})
