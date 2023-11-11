<template>
  <div
    class="map"
    :style="{ height: screenHeight + 'px', width: screenWidth + 'px' }"
  >
    <l-map
      ref="map"
      :zoom="zoom"
      :center="[positionWindiwMap.latitude, positionWindiwMap.longitude]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-tile-layer
        url="http://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
        layer-type="standard"
        name="OpenRailwayMap"
      ></l-tile-layer>

      <l-polyline :lat-lngs="way" color="green" />

      <div v-for="station in stations" :key="station.id">
        <l-marker
          :lat-lng="[station.latitude, positionWindiwMap.longitude]"
          @click="$emit('openRightBlock')"
        >
          <l-icon :icon-url="iconMarker" :icon-size="[40, 40]" />
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import {
  LPolyline,
  LIcon,
  LMarker,
  LMap,
  LTileLayer,
} from "@vue-leaflet/vue-leaflet";
import { ref, defineEmits } from "vue";
import iconMarker from "/src/assets/icons/marker.svg";
import elevation from "/src/fetch/map.js";

const screenWidth = ref(window.screen.width);
const screenHeight = ref(window.screen.height);

const zoom = ref(18);

const positionWindiwMap = ref({
  longitude: 35.398,
  latitude: 52.2924,
});

const stations = ref([
  { id: 1, longitude: 35.398, latitude: 52.2924 },
  { id: 2, longitude: 35.4253, latitude: 52.2727 },
  { id: 3, longitude: 35.2722, latitude: 51.9356 },
  { id: 4, longitude: 35.3185, latitude: 52.162 },
  { id: 5, longitude: 35.1594, latitude: 52.0647 },
]);

const way = ref(await elevation());

console.log(way.value);

defineEmits(["openRightBlock"]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.map {
  position: absolute;
  z-index: 1;
}
</style>
