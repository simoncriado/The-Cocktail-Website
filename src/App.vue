<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <router-view class="backGround"></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
.backGround {
  background-color: rgb(49, 49, 49);
  color: white;
}
</style>
