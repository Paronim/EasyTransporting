<template>
  <div class="account">
    <img src="../../assets/icons/menu.svg" alt="menu" class="icon-menu" />
    <img
      src="../../assets/icons/account.svg"
      alt="account"
      class="icon-account"
    />
  </div>
</template>

<style scoped lang="scss">
.account {
  border: 1px solid $neutral;
  display: flex;
  align-items: center;
  gap: 8px;
  column-gap: 8px;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: $neutral-lighten;
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
