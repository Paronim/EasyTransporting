<template>
  <IconButton
    :class="{ point: !!newNotificationsCounter }"
    @click="open = !open"
  >
    <img src="@/assets/icons/notifications.svg" alt="notifications" />
  </IconButton>
  <!-- Модалка с нотификациями -->
  <ModalNotifications v-if="open" @close="open = false" />
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import IconButton from "@/components/IconButton.vue";
import ModalNotifications from "@/components/Modal/ModalNotifications.vue";

const open = ref(false);

const store = useStore();

// Создаем тестовое уведомление
setTimeout(() => store.dispatch("CREATE_NOTIFICATION"), 3000);

// Счетчик новых уведомлений
const newNotificationsCounter = computed(
  () => store.getters.NEW_NOTIFICATIONS_COUNTER
);
</script>

<style scoped lang="scss">
.point {
  position: relative;
}
.point:after {
  position: absolute;
  content: "";
  background: $red;
  width: 8px;
  height: 8px;
  top: 5px;
  right: 6px;
  border-radius: 50%;
}
</style>
