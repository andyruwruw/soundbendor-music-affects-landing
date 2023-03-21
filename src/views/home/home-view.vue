<template>
  <div>
    <home-hero />

    <home-about />

    <home-purpose />

    <home-connect />

    <home-creator />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import HomeHero from './components/hero.vue';
import HomeAbout from './components/about.vue';
import HomePurpose from './components/purpose.vue';
import HomeConnect from './components/connect.vue';
import HomeCreator from './components/creator.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    HomeHero,
    HomeAbout,
    HomePurpose,
    HomeConnect,
    HomeCreator,
  },
});
</script>
