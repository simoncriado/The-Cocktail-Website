<template>
  <div class="cocktails">
    <div class="flexContainer" v-for="(cocktail, index) in cocktails" :key="index">
      <h4>{{cocktail.strDrink}}</h4>
      <router-link v-bind:to="'/CocktailDetail/' + cocktail.idDrink">
        <img class="smallImages" :src="cocktail.strDrinkThumb" alt="Cocktail" />
        <!-- To DO!!! Investigar el warning de la v-img(con sólo img no da el warning...) -->
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["amount"],
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch("getAlcoholics");
    // this.$store.dispatch("getNonAlcoholics");
    if (this.amount == "all") {
      this.$store.dispatch("getCocktails");
    } else {
      this.$store.dispatch("getRelatedCocktails", this.amount);
    }
  },
  computed: {
    cocktails() {
      var cocktails = this.$store.state.cocktails;
      return cocktails.filter(cocktail => {
        return cocktail.strDrink
          .toLowerCase()
          .includes(this.textFilter.toLowerCase());
      });
    },
    textFilter() {
      return this.$store.state.filter;
    }
  }
};
</script>

<style>
/* .button {
  border: solid;
  border-color: black;
} */
/* Intentar poner el border del botón gris oscuro!!! (hay algo en el código que pone el border verde y no puedo sobreescribirlo...) */
.cocktails {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;
}
.flexContainer {
  display: block;
  margin: 5px;
  width: 150px;
}
.smallImages {
  border: solid;
  border-color: #009688;
  border-width: 2px;
  border-radius: 5px;
  height: 150px;
}
</style>
