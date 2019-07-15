import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Cocktails from './views/Cocktails.vue'
import Spirits from './views/Spirits.vue'
import SpiritDetail from './views/SpiritDetail.vue'
import CocktailDetail from './views/CocktailDetail.vue'
import BarChat from './views/BarChat.vue'
import logIn from './views/logIn.vue'

Vue.use(Router)

const router = new Router({
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
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
    // to DO!!! Mirar que el backToTop sea smooth
  }
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path == "/logIn" && store.state.user != null) {
    next("/BarChat")
  } else {
    next()
  }
})



export default router