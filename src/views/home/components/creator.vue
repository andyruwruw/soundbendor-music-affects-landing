<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div :class="$style.details">
        <span :class="$style.title">
          Product of SoundBendor Labs
        </span>

        <span :class="$style.description">
          Oregon State University's computational understanding of
          music research group.
        </span>

        <span :class="$style.description">
          Developed by Andrew Young, Allison Schultz, Danielle Puga,
          and Matthew Walker
        </span>

        <v-btn
          :class="$style.button"
          color="#6f49ce"
          href="https://soundbendor.org/"
          elevation="0"
          dark
          rounded
          dense
          max-width="15rem">
          Learn More / Contact
        </v-btn>
      </div>

      <div :class="$style.image" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home-creator',
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 20rem;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.content {
  display: flex;
  flex-direction: column;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 18rem;
  margin-bottom: 4rem;
}

.title {
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.image {
  display: block;
  width: calc(100vw - 4rem);
  height: calc(100vw - 8rem);
  max-width: 20rem;
  max-height: 20rem;
  background-size: 110%;
  background-position: center center;
  background-image: url('../../../assets/illustrations/RAW 4.svg');
}

.description {
  color: rgb(92, 92, 92);

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
}

.button {
  margin: 2rem 0 0;
}

@media screen and (min-width: 500px) {
  .content {
    flex-direction: row;
  }

  .details {
    margin-right: 4rem;
    margin-bottom: 0rem;
  }
}

@media screen and (min-width: 800px) {
}
</style>
