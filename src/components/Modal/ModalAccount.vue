<template>
  <div class="wrapper shadow">
    <header>
      <img src="@/assets/images/account.jpg" class="avatar" alt="Аккаунт" />
      <p>
        <span class="name">Билал Иликеев</span>
        <span class="position">Диспетчер #23</span>
      </p>
      <IconButton class="button__close" @click="$emit('close')">
        <img src="@/assets/icons/close.svg" alt="Закрыть" />
      </IconButton>
    </header>
    <main>
      <a>Аккаунт</a>
      <a>Документация</a>
      <a>Настройки</a>
    </main>
    <footer>
      <a>Выйти</a>
    </footer>
  </div>
</template>

<script setup>
import IconButton from "@/components/IconButton.vue";
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  background: #fff;
  right: 0;
  top: calc(100% + 4px);
  z-index: 1;
  border-radius: 8px;
  min-width: 350px;
}

.wrapper a {
  display: block;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: $neutral-lighten;
  }
}

header {
  position: relative;
  border-bottom: 1px solid $neutral;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  column-gap: 16px;

  .name {
    font-weight: 600;
    display: block;
  }
  .position {
    font-size: 14px;
    font-weight: 400;
    display: block;
  }
  .avatar {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
}

.button__close {
  position: absolute;
  right: 16px;
}

main {
  padding: 16px;
}

footer {
  border-top: 1px solid $neutral;
  padding: 16px;
  color: $red;
}
</style>
