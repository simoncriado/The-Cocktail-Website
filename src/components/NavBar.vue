<template>
  <div>
    <v-layout wrap>
      <v-navigation-drawer v-model="drawer" dark fixed right temporary>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-img src="../Logo_Cocktail_Catering1.jpg" alt="Cocktail"></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>The Cocktail Website</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list class="pt-0" dense v-if="this.$store.state.user != null">
          <v-list-tile v-on:click="logOut">
            <v-list-tile-action>
              <v-icon>{{ exit.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ exit.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <v-toolbar fixed color="#009688">
      <v-toolbar-side-icon
        style="margin:0px; color:#424242"
        @click.stop="drawer = !drawer"
        fixed
        right
      ></v-toolbar-side-icon>
      <v-btn
        v-if="$route.name != 'home'"
        depressed
        small
        color="#424242"
        dark
        @click="$router.go(-1)"
      >
        <v-icon>arrow_back</v-icon>
        <span>Back</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", to: "/", icon: "home" },
        { title: "Cocktails", to: "/Cocktails", icon: "local_bar" },
        { title: "Spirits", to: "/Spirits", icon: "local_drink" },
        { title: "Bar Chat", to: "/logIn", icon: "question_answer" }
      ],
      exit: { title: "Log out", icon: "input" },
      mini: true,
      right: null
    };
  },
  methods: {
    logOut() {
      let that = this;
      firebase
        .auth()
        .signOut()
        .then(() => {
          that.$store.commit("GET_USER", null);
          that.$router.push("/logIn");
        });
    }
  }
};
</script>

<style>
</style>
