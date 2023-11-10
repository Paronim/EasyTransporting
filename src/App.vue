<template>
  <DefaultHeader />
  <main>
    <LeftBlock />
    <MapComponent />
  </main>
</template>

<script>
import LeftBlock from "./components/LeftBlock.vue";
import DefaultHeader from "./components/DefaultHeader.vue";
import MapComponent from "./components/MapComponent.vue";

export default {
  name: "App",
  components: {
    DefaultHeader,
    MapComponent,
    LeftBlock,
  },
};
</script>

<style lang="scss">
main {
  position: relative;
  height: calc(100vh - 70px);
}
</style>
