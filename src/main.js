import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBsQVJroo_E_mraDp1uCKrOOh86aTiWEN0",
      authDomain: "the-cocktail-website-4c7ad.firebaseapp.com",
      databaseURL: "https://the-cocktail-website-4c7ad.firebaseio.com",
      projectId: "the-cocktail-website-4c7ad",
      storageBucket: "",
      messagingSenderId: "843807089961",
      appId: "1:843807089961:web:1ad4599914f211bc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.commit("GET_USER", user)
      } else {
        store.commit("GET_USER", null)
      }
    })
  }
}).$mount('#app')
