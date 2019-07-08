import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from "firebase"

Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyBN3CvidvGclAcnU0p6b2kdRYdgErcR35o",
      authDomain: "the-cocktail-website-8ad30.firebaseapp.com",
      databaseURL: "https://the-cocktail-website-8ad30.firebaseio.com",
      projectId: "the-cocktail-website-8ad30",
      storageBucket: "",
      messagingSenderId: "650927746582",
      appId: "1:650927746582:web:5532e60fd99a2489"
    };
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
