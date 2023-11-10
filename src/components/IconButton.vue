<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
  }
}
</style>
