<template>
  <PopupTemplate max-width="550px" @close="$emit('close')">
    <template v-slot:header>
      <div class="header">
        <img src="@/assets/icons/search.svg" alt="Поиск" />
        <input v-model="text" ref="search" type="text" placeholder="Поиск..." />
      </div>
    </template>
    <template v-if="objects.length" v-slot:default>
      <div class="objects">
        <div v-for="object in objects" :key="object.id" class="object">
          <p class="object__name">
            <img :src="require(`@/assets/icons/${object.type}.svg`)" alt="" />
            <span>{{ object.name }}</span>
          </p>
          <div class="object__description">
            <template v-if="object.type === 'train'">
              <p>
                <img src="@/assets/icons/info.svg" alt="Статус" />
                <span>{{ object.status }}</span>
              </p>
              <p>
                <img src="@/assets/icons/train-container.svg" alt="Вагоны" />
                <span>{{ object.containers }} </span>
              </p>
            </template>
          </div>
        </div>
      </div>
    </template>
  </PopupTemplate>
</template>

<script setup>
import { ref, defineEmits, onMounted, computed } from "vue";
import PopupTemplate from "./PopupTemplate.vue";
import { useStore } from "vuex";
defineEmits(["close"]);

const search = ref(null);

const text = ref("п");

const store = useStore();

// Объекты
const objects = computed(() => store.getters.OBJECTS(text.value.trim()));

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

.objects {
  margin-top: 16px;
}

.object {
  cursor: pointer;
  padding: 16px;
  border-radius: 8px;
  &:hover {
    background: $neutral_lighten;
  }
}

.object__name {
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  column-gap: 4px;
  margin-bottom: 4px;
}

.object__description {
  display: flex;
  align-items: center;
  gap: 16px;
  column-gap: 16px;
  margin-left: 28px;
  p {
    display: flex;
    align-items: center;
    gap: 4px;
    column-gap: 4px;
    font-size: 14px;
    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
