<template>
  <div class="text-xs-center scroll-y">
    <h1>List of Cocktails</h1>
    <div class="cocktails">
      <div class="flexContainer" v-for="(cocktail, index) in cocktails" :key="index">
        <h4>{{cocktail.strDrink}}</h4>
        <router-link v-bind:to="'/CocktailDetail/' + cocktail.idDrink">
          <img class="smallImages" :src="cocktail.strDrinkThumb" alt="Cocktail" />
          <!-- To DO!!! Investigar el warning de la v-img(con sólo img no da el warning...) -->
        </router-link>
      </div>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="rgb(170, 59, 77)"
        @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  },
  created() {
    this.$store.dispatch("getAlcoholics");
    this.$store.dispatch("getNonAlcoholics");
  },
  computed: {
    cocktails() {
      return [
        ...this.$store.state.alcoholics,
        ...this.$store.state.nonAlcoholics
      ];
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style>
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
  border-radius: 5px;
  height: 150px;
}
</style>
