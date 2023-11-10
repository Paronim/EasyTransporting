<template>
  <header>
    <ul>
      <li>Карта</li>
      <li>Расписание</li>
      <li>Станции</li>
      <li>Текст</li>
      <li>Текст</li>
    </ul>

    <div class="actions">
      <IconButton>
        <img src="@/assets/icons/search.svg" alt="search" />
      </IconButton>
      <IconButton>
        <img src="@/assets/icons/notifications.svg" alt="notifications" />
      </IconButton>
      <div class="account">
        <img src="@/assets/icons/menu.svg" alt="menu" class="icon-menu" />
        <img
          src="@/assets/icons/account.svg"
          alt="account"
          class="icon-account"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import IconButton from "@/components/IconButton.vue";
</script>

<style scoped lang="scss">
header {
  height: 70px;
  padding: 0 60px;
  border-bottom: 1px solid $border;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
}

ul {
  width: 100%;
  text-align: center;
}

ul li {
  display: inline-block;
  padding: 0 20px;
  list-style: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid $border;
  }
}

.actions {
  position: absolute;
  right: 60px;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  column-gap: 16px;
}

.account {
  border: 1px solid $border;
  display: flex;
  align-items: center;
  gap: 8px;
  column-gap: 8px;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
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
