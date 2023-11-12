<template>
  <div
    class="map"
    :style="{ height: screenHeight + 'px', width: screenWidth + 'px' }"
  >
    <l-map ref="map" :zoom="zoom" :minZoom="4" :center="positionWindiwMap">
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
      <div v-for="way of ways" :key="way.index">
        <l-polyline :lat-lngs="way" color="green" />
      </div>
      <!-- <div v-for="way of ways2" :key="way.index">
        <l-polyline :lat-lngs="way" color="green" />
      </div>
      <div v-for="way of ways3" :key="way.index">
        <l-polyline :lat-lngs="way" color="green" />
      </div>
      <div v-for="way of ways4" :key="way.index">
        <l-polyline :lat-lngs="way" color="green" />
      </div>
      <div v-for="way of ways5" :key="way.index">
        <l-polyline :lat-lngs="way" color="green" />
      </div> -->
      <div v-if="dataTrains">
        <div v-for="stations in dataTrains.values()" :key="stations.key">
          <div v-for="station in stations" :key="station.index">
            <l-marker :lat-lng="station" @click="$emit('openRightBlock')">
              <l-icon :icon-url="iconMarker" :icon-size="[40, 40]" />
            </l-marker>
          </div>
        </div>
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
import { elevation, stationsFetch } from "/src/fetch/map.js";

const screenWidth = ref(window.screen.width);
const screenHeight = ref(window.screen.height);

const zoom = ref(14);

const positionWindiwMap = ref([68.972, 33.0694]);

const dataTrains = ref(new Map([]));
const ar = [];
await stationsFetch().then(async (result) => {
  console.log(result);
  await result.forEach((el, i) => {
    ar.push([
      Number(String(el.LATITUDE).replace(",", ".")),
      Number(String(el.LONGITUDE).replace(",", ".")),
    ]);
    if (result.length === i + 1) dataTrains.value.set(el.TRAIN_INDEX, ar);
  });
});

const ways = ref([]);

dataTrains.value.forEach((element) => {
  element.forEach(async (el, i) => {
    if (i !== element.length - 1)
      ways.value.push(await elevation(el, element[i + 1]));
  });
});
// await dataTrains.value.forEach((element) => {
//   let sl = element.slice((element.length / 5) * 3, element.length / 5);
//   sl.forEach(async (el, i) => {
//     ways2.value.push(await elevation(el, element[i + 1]));
//     i++;
//   });
// });
// await dataTrains.value.forEach((element) => {
//   let sl = element.slice((element.length / 5) * 2, (element.length / 5) * 2);
//   sl.forEach(async (el, i) => {
//     ways3.value.push(await elevation(el, element[i + 1]));
//     i++;
//   });
// });
// await dataTrains.value.forEach((element) => {
//   let sl = element.slice(element.length / 5, (element.length / 5) * 3);
//   sl.forEach(async (el, i) => {
//     ways4.value.push(await elevation(el, element[i + 1]));
//     i++;
//   });
// });
// await dataTrains.value.forEach((element) => {
//   let sl = element.slice(0, (element.length / 5) * 4);
//   sl.forEach(async (el, i) => {
//     ways5.value.push(await elevation(el, element[i + 1]));
//     i++;
//   });
// });

for (let i = 0; i < dataTrains.value.length; i++) {
  if (dataTrains.value.length / 2 === i + 1)
    positionWindiwMap.value = dataTrains.value[i].value;
}

defineEmits(["openRightBlock"]);
</script>

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
