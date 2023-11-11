<template>
  <div class="container" :class="{ open: open }">
    <div class="container__header">
      <IconButton @click="open = !open" class="ml-auto">
        <img
          :src="require(`@/assets/icons/${open ? 'close' : 'menu'}.svg`)"
          :alt="open ? 'Открыть' : 'Закрыть'"
        />
      </IconButton>
    </div>
    <template v-if="open">
      <ul class="navigation">
        <li
          v-for="navigation in navigationList"
          :key="navigation.name"
          @click="navigation.open = !navigation.open"
          class="navigation__item"
        >
          <a
            :class="{
              'overflow-link': !!navigation.items.length,
              open: navigation.open,
            }"
          >
            {{ navigation.name }}
          </a>
          <ul v-if="navigation.items.length && navigation.open">
            <li
              v-for="item in navigation.items"
              :key="item.name"
              class="navigation__item-sub"
              @click.stop="$emit('open')"
            >
              <a>{{ item }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import IconButton from "@/components/IconButton.vue";

defineEmits(["open"]);

const open = ref(true);

const navigationList = ref([
  { name: "Поезда", items: [], open: false },
  {
    name: "Вагоны",
    items: ["В пути", "Готовятся к отправке", "В ремонте", "В простое"],
    open: false,
  },
  { name: "Станции", items: [], open: false },
  { name: "Пути", items: [], open: false },
]);
</script>

<style scoped>
.container {
  padding: 16px 0;
  background: #fff;
  height: 100%;
  position: absolute;
  transition: width 2s;
  &.open {
    min-width: 300px;
  }
}
.container__header {
  padding: 0 16px;
}

li {
  list-style: none;
  user-select: none;
}

li a {
  position: relative;
  padding: 8px 16px;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    background: $neutral-lighten;
  }
}

.navigation__item {
  font-size: 24px;
  font-weight: 500;
}
.navigation__item-sub {
  font-size: 18px;
}

.navigation__item-sub a {
  padding-left: 32px;
}

.overflow-link:after {
  position: absolute;
  content: "";
  right: 20px;
  width: 24px;
  height: 24px;
  background: url("@/assets/icons/down.svg");
  background-size: 24px 24px;
  transition: 0.25s;
}

.overflow-link.open:after {
  rotate: 180deg;
}
</style>
