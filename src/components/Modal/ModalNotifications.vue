<template>
  <div class="notifications shadow">
    <header>
      Уведомления
      <div class="actions">
        <IconButton>
          <img src="@/assets/icons/settings.svg" alt="Настройки" />
        </IconButton>
        <IconButton @click="$emit('close')">
          <img src="@/assets/icons/close.svg" alt="Закрыть" />
        </IconButton>
      </div>
    </header>
    <main>
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notification_card"
      >
        <p class="notification_card__title" :class="notification.type">
          {{ notification.name }}
        </p>
        <p v-html="notification.text" class="notification_card__text" />
        <p class="notification_card__date">{{ notification.date }}</p>
      </div>
    </main>
    <footer>
      <a>Показать все</a>
    </footer>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, defineEmits, onMounted } from "vue";
import IconButton from "@/components/IconButton.vue";

defineEmits(["close"]);

const store = useStore();

// Уведомления
const notifications = computed(() => store.getters.NOTIFICATIONS);

onMounted(() => {
  setTimeout(() => store.dispatch("READ_NOTIFICATIONS"), 500);
});
</script>

<style scoped lang="scss">
::v-deep(.link) {
  color: $blue;
  cursor: pointer;
}
.notifications {
  position: absolute;
  background: #fff;
  right: 0;
  top: calc(100% + 4px);
  z-index: 1;
  border-radius: 8px;
  min-width: 350px;
}

header {
  position: relative;
  text-align: center;
  min-height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid $neutral;
  padding: 16px 0 16px;

  font-weight: 600;
}

.actions {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  column-gap: 8px;
}

.actions img {
  height: 20px;
  width: 20px;
}

main {
  padding: 16px;
}

footer {
  border-top: 1px solid $neutral;
  padding: 16px;
  color: $blue;
  text-align: center;
  a {
    cursor: pointer;
  }
}

.notification_card {
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  &__text {
    font-size: 14px;
    margin-bottom: 4px;
  }
  &__date {
    font-size: 12px;
    color: $neutral;
  }
}
.notification_card__title {
  &.success {
    color: $green;
  }
  &.error {
    color: $red;
  }
}
</style>
