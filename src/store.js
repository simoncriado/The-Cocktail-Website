import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // alcoholics: [],
    // nonAlcoholics: [],
    cocktails: [],
    filter: ""
  },
  getters: {
  },
  mutations: {
    // GET_ALC: (state, data) => {
    //   state.alcoholics = data
    // },
    // GET_NON_ALC: (state, data) => {
    //   state.nonAlcoholics = data
    // },
    GET_COCKTAILS: (state, data) => {
      // state.cocktails = [...state.cocktails, ...data]
      state.cocktails = data
    },
    GET_INPUT: (state, data) => {
      state.filter = data
    }
  },
  actions: {
    // getAlcoholics(context) {
    //   axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    //     .then(res => context.commit("GET_COCKTAILS", res.data.drinks))
    // },
    // getNonAlcoholics(context) {
    //   axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    //     .then(res => context.commit("GET_COCKTAILS", res.data.drinks));
    // },
    getCocktails(context) {
      context.commit("GET_INPUT", "")
      let alcoholics = []
      let nonAlcoholics = []
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => {
          alcoholics = res.data.drinks
          axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(res => {
              nonAlcoholics = res.data.drinks
              let cocktails = [...alcoholics, ...nonAlcoholics]
              context.commit("GET_COCKTAILS", cocktails)
            });
        })
    },
    getRelatedCocktails(context) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.name}`
        )
        .then(res => {
          let cocktails = res.data.drinks
          context.commit("GET_COCKTAILS", cocktails)
        });
    }
  }
})
