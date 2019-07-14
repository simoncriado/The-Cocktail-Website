import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cocktails from './views/Cocktails.vue'
import Spirits from './views/Spirits.vue'
import SpiritDetail from './views/SpiritDetail.vue'
import CocktailDetail from './views/CocktailDetail.vue'
import BarChat from './views/BarChat.vue'

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
      path: '/SpiritDetail/:name',
      name: 'SpiritDetail',
      component: SpiritDetail
    },
    {
      path: '/CocktailDetail/:id',
      name: 'CocktailDetail',
      component: CocktailDetail
    },
    {
      path: '/BarChat',
      name: 'BarChat',
      component: BarChat
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
    // to DO!!! Mirar que el backToTop sea smooth
  }
})
