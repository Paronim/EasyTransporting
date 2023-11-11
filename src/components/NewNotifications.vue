<template>
  <div class="notifications__wrapper">
    <div
      v-for="notification in notifications"
      :key="notification.name"
      class="notifications__item shadow"
    >
      <p class="title" :class="notification.type">
        {{ notification.name }}
        <IconButton class="button__close">
          <img src="@/assets/icons/close.svg" alt="Закрыть" />
        </IconButton>
      </p>
      <p v-html="notification.text" class="text" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import IconButton from "@/components/IconButton.vue";

const store = useStore();

// Уведомления
const notifications = computed(() => store.getters.NEW_NOTIFICATIONS);
</script>

<style scoped lang="scss">
.notifications__wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
}
.notifications__item {
  background: #fff;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  min-height: 28px;
  margin-bottom: 8px;
  &.success {
    color: $green;
  }
  &.error {
    color: $red;
  }
}

.text {
  font-size: 14px;
  &::v-deep(.link) {
    color: $blue;
    cursor: pointer;
  }
}

.button__close {
  position: absolute;
  top: 0;
  right: 0;
  img {
    height: 20px;
    width: 20px;
  }
}
</style>
