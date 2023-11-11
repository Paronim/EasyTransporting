<template>
  <div class="container shadow">
    <div class="container__header">
      <IconButton class="button__close" @click="$emit('closeMarker')">
        <img src="@/assets/icons/close.svg" alt="Закрыть" />
      </IconButton>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import IconButton from "@/components/IconButton.vue";

defineEmits(["closeMarker"]);
</script>

<style scoped lang="scss">
.container {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  position: absolute;
  top: 30px;
  right: 30px;
  min-width: 350px;
  z-index: 2;
}
.container__header {
  position: relative;
  min-height: 32px;
}
.button__close {
  position: absolute;
  right: 0;
  z-index: 1;
}
</style>
