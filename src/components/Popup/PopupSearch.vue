<template>
  <PopupTemplate max-width="550px" @close="$emit('close')">
    <template v-slot:header>
      <div class="header">
        <img src="@/assets/icons/search.svg" alt="Поиск" />
        <input ref="search" type="text" placeholder="Поиск..." />
      </div>
    </template>
  </PopupTemplate>
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";
import PopupTemplate from "./PopupTemplate.vue";
defineEmits(["close"]);

const search = ref(null);

onMounted(() => {
  if (search.value) search.value.focus();
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 32px;
  margin-right: 32px;
}
input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  outline: none;
  border: none;
}
</style>
