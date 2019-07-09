<template>
  <div class="text-xs-center">
    <h1>{{spiritName}}</h1>
    <h2>Type:</h2>
    <p>{{spiritType}}</p>
    <h2>Description:</h2>
    <p class="margins">{{spiritDescription}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: this.$route.params.name,
      spiritName: [],
      spiritType: [],
      spiritDescription: []
    };
  },
  methods: {
    getSpiritDetails() {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.name}`
        )
        .then(json => {
          this.spiritName = json.data.ingredients[0].strIngredient;
          if (json.data.ingredients[0].strType != null) {
            this.spiritType = json.data.ingredients[0].strType;
          } else {
            this.spiritType = `No information available`;
          }
          if (json.data.ingredients[0].strDescription != null) {
            this.spiritDescription = json.data.ingredients[0].strDescription;
          } else {
            this.spiritDescription = `No information available`;
          }
        });
    }
  },
  created() {
    this.getSpiritDetails();
  }
};
</script>

<style>
</style>
