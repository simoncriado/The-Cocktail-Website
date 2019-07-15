<template>
  <div class="text-xs-center" xs12 sm6>
    <h1>Select the City you are interested in!</h1>
    <p>You will be able to chat with locals or other Cocktail-lovers in that City</p>
    <v-flex>
      <div>
        <div v-for="(city, index) in cities" :key="index">
          <v-btn block color="#009688" large dark>{{city}}</v-btn>
        </div>
      </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        "Barcelona",
        "Madrid",
        "Paris",
        "London",
        "Singapore",
        "Bangkok",
        "New York"
      ]
    };
  }
};
</script>

<style>
</style>
