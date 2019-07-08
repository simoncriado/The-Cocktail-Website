<template>
  <div class="text-xs-center">
    <h1>{{cocktailDetails.strDrink}}</h1>
    <v-img :src="cocktailDetails.strDrinkThumb" alt="Cocktail"></v-img>
    <h2>Type of Glass:</h2>
    <p>{{cocktailDetails.strGlass}}</p>
    <h2>How to prepare:</h2>
    <p>{{cocktailDetails.strInstructions}}</p>
    <h2>Ingredients:</h2>
    <div>
      <router-link to="/SpiritDetail">
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="index">{{ingredient}} {{measure}}</li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cocktailDetails: [],
      ingredients: [],
      measures: []
    };
  },
  methods: {
    getCocktailDetails() {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
        {}
      )
        .then(res => res.json())
        .then(json => {
          this.getIngredients(json.drinks[0]);
          this.cocktailDetails = json.drinks[0];
        });
    },
    getIngredients(cocktail) {
      for (let key in cocktail) {
        if (key.includes("strIngredient") && cocktail[key].length != 0) {
          this.ingredients.push(cocktail[key]);
        } else if (key.includes("strMeasure") && cocktail[key].length != 0) {
          this.measures.push(cocktail[key]);
        }
      }
    },
    reloadButton() {
      return cocktailDetails;
    }
  },
  created() {
    this.getCocktailDetails();
  }
};
</script>

<style>
.list {
  display: flex;
}
</style>
