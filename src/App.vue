<template>
  <HeaderComponent @open-search="showSearchPopup = true" />
  <main id="main">
    <LeftBlock @open="openRightBlock" />
    <MapComponent />
    <RightBlock v-if="showRightBlock" @close="showRightBlock = false" />
  </main>
  <PopupSearch v-if="showSearchPopup" @close="showSearchPopup = false" />
  <NewNotifications />
  <Suspense>
    <componentMap />
  </Suspense>
</template>

<script setup>
import ComponentMap from "./components/componentMap.vue";
import LeftBlock from "./components/LeftBlock.vue";
import RightBlock from "./components/RightBlock.vue";
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import MapComponent from "./components/MapComponent.vue";
import PopupSearch from "./components/Popup/PopupSearch.vue";

import { ref } from "vue";
import NewNotifications from "@/components/NewNotifications.vue";

const showRightBlock = ref(false);
const showSearchPopup = ref(false);

const openRightBlock = () => {
  showRightBlock.value = true;
};
</script>

<style lang="scss">
#main {
  position: relative;
  height: calc(100vh - 70px);
}
</style>
