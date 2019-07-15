import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cocktails: [],
    filter: "",
    user: null
  },
  getters: {
  },
  mutations: {
    GET_COCKTAILS: (state, data) => {
      state.cocktails = data
    },
    GET_INPUT: (state, data) => {
      state.filter = data
    },
    GET_USER: (state, data) => {
      state.user = data
    }
  },
  actions: {
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
    getRelatedCocktails(context, name) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
        )
        .then(res => {
          let cocktails = res.data.drinks
          context.commit("GET_COCKTAILS", cocktails)
        });
    }
  }
})
