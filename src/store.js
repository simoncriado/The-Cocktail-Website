import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alcoholics: [],
    nonAlcoholics: [],
  },
  getters: {
  },
  mutations: {
    GET_ALC: (state, data) => {
      state.alcoholics = data
    },
    GET_NON_ALC: (state, data) => {
      state.nonAlcoholics = data
    },
  },
  actions: {
    getAlcoholics(context) {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => context.commit("GET_ALC", res.data.drinks))
    },
    getNonAlcoholics(context) {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then(res => context.commit("GET_NON_ALC", res.data.drinks));
    }
  }
})
