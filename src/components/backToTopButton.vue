<template>
  <div class="scroll-y">
    <v-btn
      class="button"
      v-scroll="onScroll"
      v-show="fab"
      dark
      fab
      fixed
      bottom
      right
      color="#009688"
      border-color="black"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style>
</style>
