<template>
  <DefaultHeader />
  <main>
    <LeftBlock @open="openRightBlock" />
    <MapComponent />
    <RightBlock v-if="showRightBlock" @close="showRightBlock = false" />
  </main>
</template>

<script setup>
import LeftBlock from "./components/LeftBlock.vue";
import RightBlock from "./components/RightBlock.vue";
import DefaultHeader from "./components/DefaultHeader.vue";
import MapComponent from "./components/MapComponent.vue";
import { ref } from "vue";

const showRightBlock = ref(false);

const openRightBlock = () => {
  showRightBlock.value = true;
};
</script>

<style lang="scss">
main {
  position: relative;
  height: calc(100vh - 70px);
}
</style>
