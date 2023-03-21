<template>
  <div :class="$style.component">
    <span :class="$style.title">
      Hang on a minute!
    </span>

    <span :class="$style.description">
      Glad you're so excited to pitch in. The app is currently
      under development and should be coming to you soon!
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'download-view',
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  height: 90vh;
  width: calc(100vw - 4rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  display: block;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.description {
  max-width: 30rem;
  text-align: center;
}
</style>
