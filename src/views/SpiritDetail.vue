<template>
  <div class="text-xs-center">
    <h1>{{spiritName}}</h1>
    <v-img
      :src="`https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`"
      alt="Cocktail"
    >
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
    <h2>Type:</h2>
    <p>{{spiritType}}</p>
    <h2>Description:</h2>
    <p>{{spiritDescription}}</p>
    <h2>Related Cocktails:</h2>
    <cocktailsList :amount="name"></cocktailsList>
    <backToTopButton></backToTopButton>
  </div>
</template>

<script>
import axios from "axios";
import backToTopButton from "@/components/backToTopButton.vue";
import cocktailsList from "@/components/cocktailsList.vue";

export default {
  data() {
    return {
      name: this.$route.params.name,
      spiritName: "",
      spiritType: "",
      spiritDescription: "",
      relatedCocktails: []
    };
  },
  components: {
    backToTopButton,
    cocktailsList
  },
  methods: {
    getSpiritDetails() {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.name}`
        )
        .then(json => {
          this.spiritName = json.data.ingredients[0].strIngredient;
          // this.spiritType =
          //   json.data.ingredients[0].strType || `No information available`;
          // this.spiritDescription =
          //   json.data.ingredients[0].strDescription ||
          //   `No information available`;
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
