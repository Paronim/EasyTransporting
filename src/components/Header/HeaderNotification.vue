<template>
  <IconButton @click="open = !open">
    <img src="@/assets/icons/notifications.svg" alt="notifications" />
  </IconButton>
  <ModalNotifications v-if="open" @close="open = false" />
</template>

<script setup>
import { ref } from "vue";
import IconButton from "@/components/IconButton.vue";
import ModalNotifications from "@/components/Modal/ModalNotifications.vue";

const open = ref(false);
</script>
