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
      path: '/SpiritDetail/:name',
      name: 'SpiritDetail',
      component: SpiritDetail
    },
    {
      path: '/CocktailDetail/:id',
      name: 'CocktailDetail',
      component: CocktailDetail
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
    // to DO!!! Mirar por qué me da errores con el to, from y savedPosition diciendo que no se refieren a nada
  }
})
