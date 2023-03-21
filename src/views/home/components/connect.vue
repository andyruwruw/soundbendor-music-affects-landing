<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div :class="$style.image" />

      <div :class="$style.details">
        <span :class="$style.title">
          Spotify Integration
        </span>

        <span :class="$style.description">
          Connect with your Spotify account to easily save new songs.
        </span>

        <span :class="$style.description">
          As easy as a few taps!
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home-connect',
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
  background-color: #F5F5F5;
  padding: 2rem;
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
  background-image: url('../../../assets/illustrations/RAW 6.svg');
}

.description {
  color: rgb(92, 92, 92);

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
}

@media screen and (min-width: 500px) {
  .content {
    flex-direction: row;
  }

  .details {
    margin-left: 4rem;
    margin-bottom: 0rem;
  }
}

@media screen and (min-width: 800px) {
}
</style>
