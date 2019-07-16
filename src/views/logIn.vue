<template>
  <div class="text-xs-center" xs12 sm6>
    <h1>The Bar Chat</h1>
    <p>(You will need to log-in to use the chat)</p>
    <!-- <div>
      <v-btn block color="#009688" large dark v-on:click="logIn()">Register</v-btn>
    </div>-->
    <h3>Log in with your Google account</h3>
    <div>
      <v-btn block color="#009688" large dark v-on:click="logIn()">Log-In</v-btn>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    logIn() {
      let that = this;
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          that.$router.push("/BarChat");
        });
    },
    created() {
      if (this.$store.state.user) {
        this.$router.push("/BarChat");
      }
    }
  }
};
</script>

<style>
</style>
