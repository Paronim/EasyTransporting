<template>
  <HeaderComponent @open-search="showSearchPopup = true" />
  <main id="main">
    <LeftBlock @open="openRightBlock" />
    <Suspense>
      <!-- <componentMap @openRightBlock="openRightBlockMarker()" /> -->
      <MapComponent />
    </Suspense>
    <RightBlock v-if="showRightBlock" @close="showRightBlock = false" />
    <RightBlockMarker
      v-if="showRightBlockMarker"
      @closeMarker="showRightBlockMarker = false"
    />
  </main>
  <PopupSearch v-if="showSearchPopup" @close="showSearchPopup = false" />
  <NewNotifications />
</template>

<script setup>
import LeftBlock from "./components/LeftBlock.vue";
import RightBlock from "./components/RightBlock.vue";
import RightBlockMarker from "./components/RightBlockMarker.vue";
import HeaderComponent from "./components/Header/HeaderComponent.vue";
// import componentMap from "./components/componentMap.vue";
import PopupSearch from "./components/Popup/PopupSearch.vue";

import { ref } from "vue";
import NewNotifications from "@/components/NewNotifications.vue";
import MapComponent from "@/components/MapComponent.vue";

const showRightBlock = ref(false);
const showRightBlockMarker = ref(false);
const showSearchPopup = ref(false);

const openRightBlock = () => {
  showRightBlock.value = true;
  showRightBlockMarker.value = false;
};

// const openRightBlockMarker = () => {
//   showRightBlockMarker.value = true;
//   showRightBlock.value = false;
// };
</script>

<style lang="scss">
#main {
  position: relative;
  height: calc(100vh - 70px);
}
</style>
