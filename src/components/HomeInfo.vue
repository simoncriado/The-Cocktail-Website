<template>
  <div class="text-xs-center">
    <h1>The Cocktail Website</h1>
    <p
      class="margins"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum pharetra nulla, at tristique nulla tempus sed. Quisque maximus sed ipsum non vestibulum. Pellentesque vel ex lobortis, aliquet augue ut, luctus nunc. Sed consequat libero sed nibh ullamcorper, id facilisis lorem finibus. Fusce nibh mi, hendrerit et bibendum in, lobortis ut ligula. Fusce a ornare magna. Nam id tellus id libero semper gravida. Nulla ut est risus. Vivamus blandit auctor ex at elementum. Vivamus est erat, aliquam in blandit nec, mattis vel urna. Suspendisse eu felis ex. Aliquam purus est, fringilla quis consectetur sit amet, placerat a nunc. Phasellus interdum pretium blandit.</p>
    <h2>Random Cocktail of the day!</h2>
    <p>(Click on the image for details)</p>
    <h3>{{ cocktail.strDrink }}</h3>
    <router-link to="/CocktailDetail">
      <v-img :src="cocktail.strDrinkThumb" alt="Cocktail"></v-img>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cocktail: {
        idDrink: "11118",
        strDrink: "Blue Margarita",
        strDrinkAlternate: null,
        strDrinkES: null,
        strDrinkDE: null,
        strDrinkFR: null,
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
        strTags: null,
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions:
          "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
        strInstructionsES: null,
        strInstructionsDE: null,
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Blue Curacao",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "",
        strIngredient11: "",
        strIngredient12: "",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1 oz ",
        strMeasure3: "1 oz ",
        strMeasure4: "Coarse ",
        strMeasure5: " ",
        strMeasure6: " ",
        strMeasure7: " ",
        strMeasure8: " ",
        strMeasure9: " ",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12: "",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strCreativeCommonsConfirmed: "No",
        dateModified: "2015-08-18 14:51:53"
      }
    };
  }
};
</script>

<style>
.margins {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
