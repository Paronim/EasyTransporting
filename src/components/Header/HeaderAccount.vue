<template>
  <div class="account" @click="open = !open">
    <img src="../../assets/icons/menu.svg" alt="Подробнее" class="icon-menu" />
    <img
      src="../../assets/icons/account.svg"
      alt="Аккаунт"
      class="icon-account"
    />
  </div>
  <!-- Модалка аккаунта -->
  <ModalAccount v-if="open" @close="open = false" />
</template>

<script setup>
import { ref } from "vue";
import ModalAccount from "@/components/Modal/ModalAccount.vue";

const open = ref(false);
</script>

<style scoped lang="scss">
.account {
  border: 1px solid $neutral;
  display: flex;
  align-items: center;
  gap: 8px;
  column-gap: 8px;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: $neutral-lighten;
  }
}

.icon {
  &-account {
    width: 28px;
    height: 28px;
  }
  &-menu {
    width: 20px;
    height: 20px;
  }
}
</style>
