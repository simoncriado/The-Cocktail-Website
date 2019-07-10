import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Simon",
    cocktails: []
  },
  getters: {
    getName(state) {
      return state.name;
    }
  },
  mutations: {
    setName(state, value) {
      state.name = value
    }
  },
  actions: {
    getCocktails(context) {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => context.state.cocktails = res.data.drinks);
    }
  }
})
