<template>
  <div class="wrapper">
    <div class="container shadow" @keyup.esc="$emit('close')">
      <header>
        <slot name="header"></slot>
        <IconButton class="button__close" @click="$emit('close')">
          <img src="@/assets/icons/close.svg" alt="Закрыть" />
        </IconButton>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import IconButton from "@/components/IconButton.vue";

defineProps({
  maxWidth: {
    type: String,
    default: "800px",
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 3;
}
.container {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: v-bind(maxWidth);
  background: #fff;
  padding: 16px;
  border-radius: 8px;
}

header {
  position: relative;
  min-height: 32px;
}

.button__close {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
