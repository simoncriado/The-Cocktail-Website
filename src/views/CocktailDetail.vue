<template>
  <div class="text-xs-center">
    <h1>{{cocktailDetails.strDrink}}</h1>
    <v-img class="randomImage" :src="cocktailDetails.strDrinkThumb" alt="Cocktail"></v-img>
    <h2>Type of Glass:</h2>
    <p>{{cocktailDetails.strGlass}}</p>
    <h2>How to prepare:</h2>
    <p class="landScape">{{cocktailDetails.strInstructions}}</p>
    <h2>Ingredients:</h2>
    <p>(Click for Details)</p>
    <div class="landScape ingredients">
      <v-btn outline color="#009688" v-for="(ingredient, index) in ingredients" :key="index">
        <router-link
          class="links"
          v-bind:to="'/SpiritDetail/' + ingredient"
        >{{ingredient}}: {{measures[index]}}</router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      cocktailDetails: {},
      ingredients: [],
      measures: []
    };
  },
  methods: {
    getCocktailDetails() {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`
        )
        .then(json => {
          this.cocktailDetails = json.data.drinks[0];
          this.getIngredients(json.data.drinks[0]);
        });
    },
    getIngredients(cocktail) {
      for (let key in cocktail) {
        if (
          key.includes("strIngredient") &&
          (cocktail[key] != null && cocktail[key].length != 0)
        ) {
          this.ingredients.push(cocktail[key]);
        } else if (
          key.includes("strMeasure") &&
          (cocktail[key] != null && cocktail[key].length != 0)
        ) {
          this.measures.push(cocktail[key]);
        }
      }
    }
  },
  created() {
    this.getCocktailDetails();
  }
};
</script>

<style>
.ingredients {
  text-align: center;
}
.links {
  text-decoration: none;
  color: white;
}
</style>
