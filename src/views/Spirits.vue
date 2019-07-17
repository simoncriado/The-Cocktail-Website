<template>
  <div class="text-xs-center scroll-y">
    <h1>List of Popular Spirits</h1>
    <p>(Click on the Picture for Info & related Cocktails)</p>
    <div class="cocktails landScape">
      <div class="flexContainer" v-for="(name, index) in names" :key="index">
        <h4>{{names[index]}}</h4>
        <router-link v-bind:to="'/SpiritDetail/' + names[index]">
          <img
            class="smallImages"
            :src="`https://www.thecocktaildb.com/images/ingredients/${names[index]}-Medium.png`"
            alt="Cocktail"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
        "Vodka",
        "Gin",
        "Tequila",
        "Whiskey",
        "Rum",
        "Beer",
        "Wine",
        "Cointreau"
      ]
    };
  },
  methods: {}
};
</script>

<style>
</style>
