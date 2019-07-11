<template>
  <div class="text-xs-center scroll-y">
    <h1>List of Popular Spirits</h1>
    <p>(Click on the Spirits to find related cocktails)</p>
    <div class="cocktails">
      <div class="flexContainer" v-for="(name, index) in names" :key="index">
        <h4>{{names[index]}}</h4>
        <img
          class="smallImages"
          :src="`https://www.thecocktaildb.com/images/ingredients/${names[index]}-Medium.png`"
          alt="Cocktail"
        />
      </div>
      <v-btn
        class="button"
        v-scroll="onScroll"
        v-show="fab"
        dark
        fab
        fixed
        bottom
        right
        color="#009688"
        border-color="black"
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
      fab: false,
      names: ["vodka", "gin", "tequila"]
    };
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
.smallImages {
  border: solid;
  border-color: #009688;
  border-width: 2px;
  border-radius: 5px;
  height: 150px;
}
</style>
