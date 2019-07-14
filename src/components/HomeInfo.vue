<template>
  <div class="text-xs-center">
    <h1>The Cocktail Website</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum pharetra nulla, at tristique nulla tempus sed. Quisque maximus sed ipsum non vestibulum. Pellentesque vel ex lobortis, aliquet augue ut, luctus nunc. Sed consequat libero sed nibh ullamcorper, id facilisis lorem finibus. Fusce nibh mi, hendrerit et bibendum in, lobortis ut ligula. Fusce a ornare magna. Nam id tellus id libero semper gravida. Nulla ut est risus. Vivamus blandit auctor ex at elementum. Vivamus est erat, aliquam in blandit nec, mattis vel urna. Suspendisse eu felis ex. Aliquam purus est, fringilla quis consectetur sit amet, placerat a nunc. Phasellus interdum pretium blandit.</p>
    <h2>Random Cocktail of the day!</h2>
    <p>(Click on the image for details)</p>
    <h3>{{ cocktails.strDrink }}</h3>
    <router-link v-bind:to="'/CocktailDetail/' + cocktails.idDrink">
      <v-img class="randomImage" :src="cocktails.strDrinkThumb" alt="Cocktail"></v-img>
    </router-link>
    <v-btn small v-on:click="reloadButton" color="#009688" fab>
      <v-icon>replay</v-icon>
    </v-btn>
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
.randomImage {
  border: solid;
  border-color: #009688;
  border-width: 2px;
  border-radius: 5px;
}
</style>
