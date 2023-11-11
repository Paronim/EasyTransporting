<template>
  <header>
    <ul>
      <li>Карта</li>
      <li>Расписание</li>
      <li>Станции</li>
      <li>Текст</li>
      <li>Текст</li>
    </ul>

    <div class="actions">
      <HeaderSearch @click="$emit('openSearch')" />
      <HeaderNotification />
      <HeaderAccount />
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";
import HeaderNotification from "@/components/Header/HeaderNotification.vue";
import HeaderSearch from "@/components/Header/HeaderSearch.vue";
import HeaderAccount from "@/components/Header/HeaderAccount.vue";

defineEmits(["openSearch"]);
</script>

<style scoped lang="scss">
header {
  height: 70px;
  padding: 0 60px;
  border-bottom: 1px solid $neutral;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
}

ul {
  width: 100%;
  text-align: center;
}

ul li {
  display: inline-block;
  padding: 0 20px;
  list-style: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid $neutral;
  }
}

.actions {
  position: absolute;
  right: 60px;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  column-gap: 16px;
  height: 100%;
}
</style>
