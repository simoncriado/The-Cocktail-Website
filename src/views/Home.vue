<template>
  <div class="home">
    <NavBar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>
