<template>
  <div class="text-xs-center">
    <h1>The Cocktail Website</h1>
    <p class="landScape">
      A Cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added.
      <br />In this website you will find a big selection of Cocktails and the instructions and ingredients to prepare them. Also you will be able to chat with other Cocktail-lovers in our Bar Chat section. Enjoy and have fun!
    </p>
    <h2>Random Cocktail of the day!</h2>
    <p>(Click on the image for details)</p>
    <v-btn small v-on:click="reloadButton" color="#009688" fab>
      <v-icon>replay</v-icon>
    </v-btn>
    <h3>{{ cocktails.strDrink }}</h3>
    <router-link v-bind:to="'/CocktailDetail/' + cocktails.idDrink">
      <v-img class="randomImage" :src="cocktails.strDrinkThumb" alt="Cocktail"></v-img>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cocktails: []
    };
  },
  methods: {
    getCocktails() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {})
        .then(res => res.json())
        .then(json => (this.cocktails = json.drinks[0]));
    },
    reloadButton() {
      this.getCocktails();
    }
  },
  created() {
    this.getCocktails();
    this.reloadButton();
  }
};
</script>

<style>
</style>
