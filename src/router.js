import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cocktails from './views/Cocktails.vue'
import Spirits from './views/Spirits.vue'
import SpiritDetail from './views/SpiritDetail.vue'
import CocktailDetail from './views/CocktailDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Cocktails',
      name: 'Cocktails',
      component: Cocktails
    },
    {
      path: '/Spirits',
      name: 'Spirits',
      component: Spirits
    },
    {
      path: '/SpiritDetail',
      name: 'SpiritDetail',
      component: SpiritDetail
    },
    {
      path: '/CocktailDetail',
      name: 'CocktailDetail',
      component: CocktailDetail
    },
  ]
})
