<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md3>
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
      this.$store.commit("GET_IMPUT", this.search);
    }
  }
};
</script>

<style>
</style>
