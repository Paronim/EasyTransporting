<template>
  <div class="container shadow">
    <div class="container__header">
      Полувагон #567
      <IconButton class="button__close" @click="$emit('close')">
        <img src="@/assets/icons/close.svg" alt="Закрыть" />
      </IconButton>
    </div>
    <div class="container__main">
      <p>
        <img src="@/assets/icons/info.svg" alt="Статус" />
        <strong>Статус: </strong> В пути
      </p>
      <p>
        <img src="@/assets/icons/location.svg" alt="Местоположение" />
        <strong>Маршрут: </strong> Уфа - Казань - Москва
      </p>
      <p>
        <img src="@/assets/icons/train.svg" alt="Поезд" />
        <strong>Поезд: </strong> Грузовой поезд <a class="link">#453</a>
      </p>
      <p>
        <img src="@/assets/icons/clock.svg" alt="Прибытие" />
        <strong>Прибытие: </strong> 25.07.2023 15:25
      </p>
      <p>
        <img src="@/assets/icons/weight.svg" alt="Грузоподъемность" />
        <strong>Грузоподъемность: </strong> 50 т
      </p>
    </div>
    <div class="container__footer">
      <div class="button" @click="open = !open">
        <p>История маршрута</p>
        <img
          :class="{ open: open }"
          src="@/assets/icons/down.svg"
          alt="Закрыть"
        />
      </div>
      <div v-if="open">
        <p class="empty">Данные по вагону отсутствуют</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import IconButton from "@/components/IconButton.vue";

defineEmits(["close"]);

const open = ref(false);
</script>

<style scoped lang="scss">
.container {
  background: #fff;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 500;
  padding: 16px;
  border-bottom: 1px solid $neutral;
}
.container__main {
  padding: 16px 16px 0;
  p {
    display: flex;
    align-items: center;
    gap: 4px;
    column-gap: 4px;
    padding: 8px 0;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.container__footer {
  padding: 16px;
  .button {
    user-select: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 8px;
    position: relative;
    font-size: 18px;
    font-weight: 500;
    min-height: 32px;
    display: flex;
    align-items: center;
  }
  .button:hover {
    background: $neutral-lighten;
  }
  .button img {
    position: absolute;
    right: 16px;
    z-index: 1;
    width: 20px;
    height: 20px;
    transition: 0.25s;
    &.open {
      rotate: 180deg;
    }
  }
  .empty {
    padding: 16px 8px;
  }
}
.button__close {
  position: absolute;
  right: 16px;
  z-index: 1;
}
.link {
  color: $blue;
  cursor: pointer;
}
</style>
