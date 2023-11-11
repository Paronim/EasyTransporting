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
      <h1>test</h1>
    </main>
    <footer>
      <a>Показать все</a>
    </footer>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import IconButton from "@/components/IconButton.vue";
defineEmits(["close"]);
</script>

<style scoped lang="scss">
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
}
</style>
