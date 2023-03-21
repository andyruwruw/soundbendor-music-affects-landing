<template>
  <v-app-bar
    app
    :class="$style.component"
    flat>
    <div :class="$style.content">
      <span
        :class="$style.title"
        @click="goToHome"
        @keyup="() => { return null; }">
        Music Affects
      </span>

      <v-spacer />

      <v-btn
        color="#6f49ce"
        elevation="0"
        dark
        rounded
        dense
        @click="goToDownload">
        Download
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'app-bar',

  methods: {
    ...mapActions('navigation', [
      'goToHome',
      'goToDownload',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
}

.content {
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
}

.title {
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 800;
  background-image: linear-gradient(45deg, #ff8c00, #4d07ff);
  color: #fea02c;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  cursor: pointer;
}
</style>
