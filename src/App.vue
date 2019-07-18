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
.landScape {
  text-align: left;
}
.text-xs-center {
  min-height: 100vh;
  padding-top: 70px;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
}
.randomImage {
  border: solid;
  border-color: #009688;
  border-width: 2px;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
}
@media (orientation: landscape) {
  .randomImage {
    width: 40%;
    margin: auto;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .landScape {
    margin: auto;
    width: 80%;
  }
  .randomImage2 {
    width: 40%;
    margin: auto;
    margin-bottom: 15px;
    margin-top: 15px;
  }
}
</style>
