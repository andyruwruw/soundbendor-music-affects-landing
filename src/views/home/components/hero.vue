<template>
  <div :class="$style.component">
    <div :class="$style.image" />

    <div :class="$style.content">
      <span :class="$style.hero">
        Help us Connect Music to Emotions
      </span>

      <span :class="$style.description">
        Aid Soundbendor in their endevor to research computational analysis of music.
      </span>

      <v-btn
        color="#6f49ce"
        elevation="0"
        dark
        flat
        rounded
        dense
        max-width="15rem">
        Download the App
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home-hero',
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem);
  margin: 4rem auto;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  display: block;
  width: calc(100vw - 1rem);
  height: calc(100vw - 1rem);
  max-width: 28rem;
  max-height: 30rem;
  background-size: 110%;
  background-position: center center;
  background-image: url('../../../assets/illustrations/RAW 11.svg');
}

.hero {
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 700;
  background-image: linear-gradient(45deg, #ff8c00, #4d07ff);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  margin-top: 2rem;
  max-width: 40rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.description {
  color: black;
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 30rem;
  text-align: center;
}

@media screen and (min-width: 500px) {
  .hero {
    font-size: 3rem;
    margin-top: 2rem;
  }
}

@media screen and (min-width: 800px) {
  .hero {
    font-size: 4rem;
    line-height: 5rem;
    margin-top: 4rem;
  }

  .component {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
