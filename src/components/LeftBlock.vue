<template>
  <div class="container" :class="{ open: open }">
    <IconButton @click="open = !open" class="ml-auto">
      <img
        :src="require(`@/assets/icons/${open ? 'close' : 'menu'}.svg`)"
        :alt="open ? 'Открыть' : 'Закрыть'"
      />
    </IconButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconButton from "@/components/IconButton.vue";
const open = ref(false);
</script>

<style scoped>
.container {
  padding: 16px;
  background: #fff;
  height: 100%;
  position: absolute;
  transition: width 2s;
  &.open {
    min-width: 300px;
  }
}
</style>
