<template>
  <v-layout row wrap>
    <v-flex xs12 md3>
      <v-text-field
        background-color="#009688"
        color="#009688"
        v-model="search"
        label="Search for a Cocktail"
        outline
        dark
        @keyup="postInput"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    postInput() {
      this.$store.commit("GET_INPUT", this.search);
      //el input se queda marcado aunque salga de la página de los cocteles...
    }
  }
};
</script>

<style>
</style>
