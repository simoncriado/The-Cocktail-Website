<template>
  <div>
    <v-layout wrap>
      <v-navigation-drawer v-model="drawer" absolute temporary>
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
      </v-navigation-drawer>
    </v-layout>
    <v-toolbar color="#009688">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        v-if="$route.name != 'home'"
        depressed
        small
        color="rgb(49, 49, 49)"
        dark
        @click="$router.go(-1)"
      >
        <v-icon left>arrow_back</v-icon>
        <span>Back</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", to: "/", icon: "home" },
        { title: "Cocktails", to: "/Cocktails", icon: "local_bar" },
        { title: "Spirits", to: "/Spirits", icon: "local_drink" },
        { title: "Bar Chat", to: "/BarChat", icon: "question_answer" }
      ],
      mini: true,
      right: null
    };
  }
};
</script>

<style>
</style>
