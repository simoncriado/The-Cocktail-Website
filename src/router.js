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
import chatRoom from './views/chatRoom.vue'

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
      component: BarChat,
      // meta: { requiresAuth: true }
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/chatRoom/:name',
      name: 'chatRoom',
      component: chatRoom
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})

router.beforeEach((to, from, next) => {
  if (to.path == "/logIn" && store.state.user != null) {
    next("/BarChat")
  }
  // else if (to.path == "/BarChat" && store.state.user == null) {
  //   next("/logIn")
  // } 
  else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (store.state.user != null) {
//       console.log("Si User");

//       next()
//     } else {
//       next("/logIn")
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })


export default router