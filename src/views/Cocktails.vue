<template>
  <div>
    <h1>List of Cocktails</h1>
    <div v-for="(cocktail, index) in cocktails" :key="index">
      <router-link v-bind:to="'/CocktailDetail/' + cocktail.idDrink">
        <v-img :src="cocktail.strDrinkThumb" alt="Cocktail"></v-img>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCocktails");
  },
  computed: {
    cocktails() {
      return this.$store.state.cocktails;
    }
  }
};
</script>

<style>
</style>
