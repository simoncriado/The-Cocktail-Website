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
  background-color: #424242;
  color: white;
}
.text-xs-center {
  min-height: 100vh;
  padding-top: 70px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
