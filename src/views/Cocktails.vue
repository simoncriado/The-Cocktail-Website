<template>
  <div class="text-xs-center">
    <h1>List of Cocktails</h1>
    <searchBar class="landScape"></searchBar>
    <cocktailsList class="landScape" amount="all"></cocktailsList>
    <backToTopButton></backToTopButton>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import backToTopButton from "@/components/backToTopButton.vue";
import cocktailsList from "@/components/cocktailsList.vue";

export default {
  data() {
    return {};
  },
  components: {
    SearchBar,
    backToTopButton,
    cocktailsList
  }
};
</script>

<style>
</style>
