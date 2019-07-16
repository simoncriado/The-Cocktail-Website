<template>
  <div class="text-xs-center" xs12 sm6>
    <h1>Select the City you are interested in!</h1>
    <p>You will be able to chat with locals or other Cocktail-lovers in that City</p>
    <v-flex>
      <div>
        <div v-for="(city, index) in cities" :key="index">
          <router-link class="text" v-bind:to="'/chatRoom/' + city">
            <v-btn block color="#009688" large dark>{{city}}</v-btn>
          </router-link>
        </div>
      </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
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
.text {
  text-decoration: none;
}
</style>
